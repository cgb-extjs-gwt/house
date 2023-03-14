#!/usr/bin/env bash
# ---------------------------------------------------------------------------------------------------|
#  Repo                    : https://github.com/bradyhouse/house_____________________________________|
#  Specification           : N/A_____________________________________________________________________|
#  Specification Path      : N/A_____________________________________________________________________|
#  Author                  : brady house_____________________________________________________________|
#  Create date             : 05/02/2016______________________________________________________________|
#  Description             : MASTER VIRTUALBOX INSTALL FUNCTION______________________________________|
#  Input Parameters        : N/A_____________________________________________________________________|
#  Initial Consumer        : ../../fiddle-docker.sh__________________________________________________|
# ---------------------------------------------------------------------------------------------------|
#  Revision History::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::|
# ---------------------------------------------------------------------------------------------------|
# Baseline Ver - CHANGELOG.MARKDOWN ~ 201605180420
# ---------------------------------------------------------------------------------------------------|

function brewInstallVirtualbox() {
    groupLog "brewInstallVirtualbox";
    installed=$(isInstalled "virtualbox";);
    if [[ "${installed}" == "false" ]]
    then
        brew cask install virtualbox || exit $?;
    fi
}