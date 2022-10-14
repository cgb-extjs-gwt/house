#!/usr/bin/env bash
# ---------------------------------------------------------------------------------------------------|
#  Repo                    : https://github.com/bradyhouse/house_____________________________________|
#  Specification           : N/A_____________________________________________________________________|
#  Specification Path      : N/A_____________________________________________________________________|
#  Author                  : brady house_____________________________________________________________|
#  Create date             : 05/26/2018______________________________________________________________|
#  Description             : MASTER METEOR SETUP SCRIPT FOR DARWIN___________________________________|
#  Command line Arguments  : N/A_____________________________________________________________________|
# ---------------------------------------------------------------------------------------------------|
#  Revision History::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
# ---------------------------------------------------------------------------------------------------|
# Baseline Ver - CHANGELOG @ 230_update_and_shrinkwrap
# ---------------------------------------------------------------------------------------------------|


function install() {
  groupLog "install";
  #try
  (
    curl https://install.meteor.com/ | sh || exit $?;
  )
  #catch
  _rc=$?
  case ${_rc} in
    0)  echo "Done. meteor installed successfully."
        ;;
    *)  echo "foo bar! Something went wrong."
        ;;
  esac
  #finally
  echo ${_rc}
}
