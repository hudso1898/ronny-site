#!/bin/bash

# Malek Necibi - mnygp@umsystem.edu - 14340854
# CS3530 Final Project 2020FS
# This script fetches historical weather data from NOAA to estimate the likely temperature on a given day


TempDirName=".TempWeather"
ZipCodesFile="zipcodes-normals-stations.txt"
#StationsFile="allstations.txt"
NOAABaseURL="ftp://ftp.ncdc.noaa.gov/pub/data/normals/1981-2010"

# rm -R $TempDirName 2> /dev/null


# BEGINNING OF FUNCTIONS
function fetchFile {
	local filePath=$1
	local fileName=$(basename "$filePath")
	if [[ ! -f "$fileName" ]] ; then
		$(wget -q "$filePath")
		if [[ "$?" -ne 0 ]] ; then
			echo "ERROR: Weather Data Download Failed"
			exit 1
		fi
	fi
}

function getZip {
	local __resultvar=$1
	INPUT=0
	
	# Check for argument passed in
	if [[ $NumParams -ge 1 ]] ; then
		INPUT=$(echo "${PARAMS[0]}")
	fi
	
	while [[ ! ($INPUT -ge "10000" && $INPUT -le "99999") ]] ; do
		read -p "Please enter your 5-digit zip code (-1 to quit): " INPUT
		if [[ $INPUT -eq -1 ]] ; then
			exit 0
		fi
	done
	
	local myresult="$INPUT"
	eval $__resultvar="'$myresult'"
}

function checkZip {
	local __resultvar=$1
	zip="$2"
	Stations="$(grep " $zip" zipcodes-normals-stations.txt | awk -e "/ $zip/{print \$1}")"
	StationRegex="[A-Za-z]{3}[0-9]{8}" # standard format for station IDs
	# If 0 stations found with given zip code
	if [[ ! "$Stations" =~ $StationRegex ]] ; then
		dashedZip=$(printf '%-5s' "$zip" | sed 's/ /-/g')
		echo "No weather data found for zip code $dashedZip"
		zipLength=${#zip}
		NEARBY=$(echo $zip | cut -c1-$(($zipLength - 1)))
		# Don't show matches if down to just 1 digit
		if [[ $zipLength -ge 2 ]] ; then
			dashedNearby=$(printf '%-5s' "$NEARBY" | sed 's/ /-/g')
			echo "Searching nearby options matching: $dashedNearby"
			checkZip Stations $NEARBY
			local myresult="$Stations"
			eval $__resultvar="'$myresult'"
			#Stations=
			return
		else 
			# Need to add what to do if truncated check fails also
			echo "checkZip unable to find a nearby zip code. Goodbye"
			exit 2
		fi
	fi
	
	# Check that there is actual temperature data available from the stations found
	allBad=1
	numMatches="$(echo "$Stations" | wc -l)"
	for (( i = 1 ; i <= "$numMatches" ; i++)) ; do
		DataExists=$(grep $(echo "$Stations" | sed -n "$i"p) temp-inventory.txt | wc -l)
		# Stations with Temperature data found
		if [[ $DataExists -ge 1 ]] ; then
			Stations2="$Stations2""$(echo "$Stations" | sed -n "$i"p)"$'\n'
			allBad=0
		fi
	done
	
	if [[ $allBad -eq 1 ]] ; then
		#echo "ALLBAD"
		NEARBY=$(echo $zip | cut -c1-$(($zipLength - 1)))
		dashedNearby=$(printf '%-5s' "$NEARBY" | sed 's/ /-/g')
		echo "Searching nearby options matching: $dashedNearby"
		checkZip Stations $NEARBY
	fi
	
	local myresult="$Stations2"
	eval $__resultvar="'$myresult'"
	
	zip=
	numMatches=
	allBad=
	
}

function getStation {
	local __resultvar1=$1
	local __resultvar2=$3
	
	NumMatchingStations=$(echo "$2" | wc -l)
	NumMatchingStations=$((NumMatchingStations - 1))
	declare -A StationIDsArray=()
	declare -A StationNamesArray=()
	NumGoodStations=$NumMatchingStations
	for (( i = 1 ; i <= "$NumGoodStations"; i++ )) ; do
		StationIDsArray[$i]=$(echo "$2" | sed -n "$i"p)
		StationNamesArray[$i]=$(grep ${StationIDsArray[$i]} temp-inventory.txt | cut -c39-71 | tr -s ' ' | sed 's/ $//')
		MatchCount=$(grep ${StationIDsArray[$i]} temp-inventory.txt | wc -l)
		if [[ $MatchCount -ge 1 ]] ; then # if Station has monthly weather data
			echo $i: ${StationNamesArray[$i]} \($(grep ${StationIDsArray[$i]} zipcodes-normals-stations.txt | cut -c13-17)\)
		else
			((i=i-1))
			((NumGoodStations=NumGoodStations-1))
		fi
	done
	
	if [[ $NumGoodStations -eq 0 ]] ; then
		echo "No Stations Found"
	fi
	
	SELECTION=0
	if [[ "$NumGoodStations" != "1" && $NumParams -le 0 ]] ; then
		while [[ ! (("$SELECTION" -ge 1) && ("$SELECTION" -le "$NumGoodStations")) ]] ; do
			read -p "Please enter the integer (1-$NumGoodStations) corresponding to your location (If unsure, enter 1): " SELECTION
		done
	else
		SELECTION=1
	fi
	
	StationID=${StationIDsArray[$SELECTION]}
	local myresult1="$StationID"
	eval $__resultvar1="'$myresult1'"
	
	StationName=${StationNamesArray[$SELECTION]}
	local myresult2="$StationName"
	eval $__resultvar2="'$myresult2'"

	SELECTION=
	NumGoodStations=
	NumMatchingStations=
	MatchCount=
	unset 'StationIDsArray'
	unset 'StationNamesArray'
}

function parseStationData {
	local __resultvar=$1
	FILENAME=$2
	NORMALID=$3
	MONTH=$4
	DAY=$5
	
	if [[ ! -f $FILENAME ]] ; then
		echo "ERROR: Weather Normals Data File Not Found ($FILENAME)"
	fi
	
	FirstLineNumber=$(grep -n "$NORMALID" $FILENAME | cut -d : -f 1)
	LastLineNumber=$(($FirstLineNumber + 11))
	
	DATA="$(sed -n $FirstLineNumber,$LastLineNumber\p $FILENAME | sed -r "s/^.{$((${#NORMALID}+4))}//")"
	MONTHDATA=$(echo "$DATA" | head -$MONTH | tail -1 )
	DAYDATA=$(echo "$MONTHDATA" | cut -c$(((DAY-1)*7+1))-$(( DAY*7 )) | sed 's/ //g')
	
	local myresult="$DAYDATA"
	eval $__resultvar="'$myresult'"
	
}

function formatData {
	local __resultvar=$1
	RawData=$2
	
	FormattedData=-1
	
	if [[ "$RawData" == "-8888" ]] ; then
		echo "Error: Possibly an Invalid date was entered"
		FormattedData=--
	elif [[ "$RawData" == "-7777" ]] ; then
		FormattedData=0 # -7777 means value was greater than 0.0 but less than 0.1
	elif [[ $(echo "$RawData" | cut -c1-1) == "-" ]] ; then
		FormattedData=--
	else
		RawDataLength=${#RawData}
		IntegerData=$(echo "$RawData" | cut -c1-"$(($RawDataLength-2))")
		DecimalData=$(echo "$RawData" | cut -c"$(($RawDataLength-1))"-"$(($RawDataLength-1))")
		FormattedData="$IntegerData.$DecimalData"
	fi
	
	local myresult="$FormattedData"
	eval $__resultvar="'$myresult'"
}
# END OF FUNCTIONS


# Create and Enter temporary directory to store weather data
if [[ ! -d "$TempDirName" ]] ; then 
	mkdir $TempDirName
	echo "Fetching NOAA Weather Stations. One moment please..."
fi
cd $TempDirName
if [[ "$(basename "$PWD")" != "$TempDirName" ]] ; then
	echo "ERROR: Unable to create directory to store weather data"
fi


# Download station data from National Oceanic and Atmospheric Administration (NOAA)
# Static, low-size files, could be included with program
fetchFile "$NOAABaseURL/station-inventories/zipcodes-normals-stations.txt"
#fetchFile "$NOAABaseURL/station-inventories/allstations.txt"
fetchFile "$NOAABaseURL/station-inventories/temp-inventory.txt"


declare -A PARAMS=()
NumParams=0
for (( NumParams=0 ; "${BASH_ARGV[$NumParams]}" -ne "" ; NumParams++ )) ; do
	PARAMS[$NumParams]="${BASH_ARGV[$NumParams]}"
	#echo NumParams:"$NumParams":${PARAMS[$NumParams]}
done

while (( 1==1 )) ; do
	# Get user's Zip Code, save to variable ZipCode
	ZipCode=
	getZip ZipCode
	
	MatchesStations=	
	checkZip MatchesStations "$ZipCode"
	Stations=
	Stations2=	

	# Get user to select from which weather station to pull data
	StationID=
	getStation StationID "$MatchesStations" StationName
	
	
	# Download Weather Normals for selected station from NOAA
	NormalsFilePath="$NOAABaseURL/products/auxiliary/station/$StationID.normals.txt"
	echo "Fetching Historical Weather Data. One moment please..."
	fetchFile $NormalsFilePath
	NormalsFile=$(basename $NormalsFilePath)
	
	MONTH=-1
	if [[ $NumParams -ge 1 ]] ; then
		MONTH=0
	fi
	DAY=-1
	
	while !([ "$MONTH" -ge 0 -a "$MONTH" -le 12 ]) ; do
		read -p "Please enter a month (1-12) (Enter 0 for today's date): " MONTH
	done
	
	if [[ $MONTH -eq 0 ]] ; then 
		MONTH=0
		DATE=$(date +'%m/%d')
		MONTH=$(( $(echo "$DATE" | cut -c1-2) ))
		DAY=$(( $(echo $DATE | cut -c4-5) ))
	
	else
		while !([ "$DAY" -ge 1 -a "$DAY" -le 31 ]) ; do
			read -p "Please enter a day (1-31): " DAY
		done
	fi
	
	echo ""
	echo "Average Weather at '$StationName' on $MONTH/$DAY between 1981-2010:"
	
	parseStationData AvgTemp "$NormalsFile" "dly-tavg-normal" $MONTH $DAY
	formatData Avg "$AvgTemp"
	echo Temperature: "$Avg" degrees
	
	parseStationData HighTemp "$NormalsFile" "dly-tmax-normal" $MONTH $DAY
	formatData High "$HighTemp"
	echo High Temp: "$High" degrees
	
	parseStationData LowTemp "$NormalsFile" "dly-tmin-normal" $MONTH $DAY
	formatData Low "$LowTemp"
	echo Low Temp: "$Low" degrees
	
	# Additional Basic Example (3 lines)
	#parseStationData Precip75thPercentile "$NormalsFile" "dly-prcp-75pctl" $MONTH $DAY
	#formatData Precip75 "$Precip75thPercentile"
	#echo 75th Percentile Precipitation: "$Precip75" inches


	# Month-to-Day Data Conversion Method (10 lines)
	#parseStationData RawPrecipFinal "$NormalsFile" "mtd-prcp-normal" $MONTH $DAY
	#formatData pFinal "$RawPrecipFinal"
	#if [[ $DAY -eq 1 ]] ; then
	#	pInitial=0
	#else
	#	parseStationData RawPrecipInitial "$NormalsFile" "mtd-prcp-normal" $MONTH $DAY
	#	formatData pInitial "$RawPrecipInitial"
	#fi
	#NetPrecip=$(echo "$pFinal - $pInitial" | bc)
	#echo Precipitation: "$NetPrecip" inches
	
	echo "-----------------------------------------"
	echo ""
	
	for ((i=0 ; i < $NumParams ; i++ )) ; do
		PARAMS[$i]=${PARAMS[$((i+1))]}
	done
	PARAMS[$NumParams]=
	NumParams=$((NumParams-1))
done
