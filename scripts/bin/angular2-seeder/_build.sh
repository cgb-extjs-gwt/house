#!/usr/bin/env bash
# ---------------------------------------------------------------------------------------------------|
#  Repo                    : https://github.com/bradyhouse/house_____________________________________|
#  Specification           : N/A_____________________________________________________________________|
#  Specification Path      : N/A_____________________________________________________________________|
#  Author                  : brady house_____________________________________________________________|
#  Create date             : 05/02/2016______________________________________________________________|
#  Description             : MASTER ANGULAR2-SEEDER BUILD FUNCTION___________________________________|
#  Entry Point             : build___________________________________________________________________|
#  Input Parameters        : N/A_____________________________________________________________________|
#  Initial Consumer        : ../fiddle-build.sh______________________________________________________|
# ---------------------------------------------------------------------------------------------------|
#  Revision History::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
# ---------------------------------------------------------------------------------------------------|
# Baseline Ver - CHANGELOG.MARKDOWN ~ 201605020420
# ---------------------------------------------------------------------------------------------------|

function npmBuildProd() {
  groupLog "npmBuildProd";
  pwd;
  npm run build.prod

}

function catch() {
    case $1 in
        0)  endLog "Build complete.";
            ;;
        *)  endLog "fubar! Something went wrong.";
            ;;
    esac
    exit $1
}

function seederBuild() {
    groupLog "seederBuild";
    fiddle=$1;
    # try
    (
        cd ${fiddle};
        npmBuildProd || exit 1;
        cd "../dist";
        if [[ -d "${fiddle}" ]]
        then
          rm -rf "${fiddle}";
        fi
        mkdir "${fiddle}";
        cd "../${fiddle}";
        cd "dist";
        cp -rf prod/* "../../dist/${fiddle}";
        cd "../../dist/${fiddle}";
        rm -rf package.json;
    )
    # catch
    rc=$?; case ${rc} in
        0)  echo ""
            ;;
        1)  endLog "build: Failed while attempting to build \"${fiddle}\".";
            ;;
        *)  endLog "build: F U B A R ~ Something went wrong."
            ;;
    esac
    exit ${rc};
}


function build() {
  groupLog "build";

  if [ "$#" -ne 1 ]
  then
        echo "Incorrect number of arguments"
        echo "Please specify the name of the fiddle"
        exit 59
  fi

  clear;
  echo "$0" | sed 's/\.\///g' | awk '{print toupper($0)}'
  echo "Bash version ${BASH_VERSION}..."

  # try
  (
      cd ../fiddles/angular2-seeder;

      if [[ ! -d "dist" ]]
      then
        mkdir dist;
      else
         if [[ -d "dist/$1" ]]; then rm -R "dist/$1"; fi
      fi

      seederBuild $1 || exit 1;
  )

  # catch
  rc=$?; catch ${rc};

  #finally
  exit ${rc};

}
