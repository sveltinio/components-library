#!/usr/bin/env bash

EMERALD_COLOR="#34d399"
BLUE_COLOR="#60a5fa"

emerald_text () {
    gum style --bold --foreground "$EMERALD_COLOR" "$1"
}

blue_text () {
    gum style --bold --foreground "$BLUE_COLOR" "$1"
}

echo ""
echo "Choose the $(blue_text 'action') to run:"

ACTION=$(gum choose "dev" "test" "build" "yalc" "update" "clean")

echo "Selected action: $(emerald_text ${ACTION})"
echo ""

if [[ $ACTION == "clean" ]]
then
    source clean_all.sh
else
    echo "Choose the $(blue_text 'package'):"
    
    PACKAGE=$(gum choose "essentials" "media-content" "seo" "services" "widgets")
    
    echo "Selected package: $(emerald_text ${PACKAGE})"
    echo ""
    
    if [[ $ACTION == "update" ]]
    then
        pnpm $ACTION --filter="@sveltinio/${PACKAGE}"
    elif [[ $ACTION == "test" ]]
    then
        # run test
        pnpm --filter="@sveltinio/${PACKAGE}" test
    elif [[ $ACTION == "yalc" ]]
    then
        cd "../packages/$PACKAGE/dist"
        yalc publish
    else
        # run the action
        pnpm --filter="@sveltinio/${PACKAGE}" $ACTION
    fi
fi
