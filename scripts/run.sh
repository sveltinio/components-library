#!/bin/sh

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

ACTION=$(gum choose "postcss" "dev" "test" "build" "update" "clean")

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

    if [[ $ACTION == "postcss" ]]
    then
        # run postcss cli
        source postcss.sh "../packages/$PACKAGE"
    elif [[ $ACTION == "update" ]]
    then
        pnpm $ACTION --filter="@sveltinio/${PACKAGE}"
    elif [[ $ACTION == "test" ]]
    then
        # run postcss cli
        source postcss.sh "../packages/$PACKAGE"
        # run test
        pnpm turbo test --filter="@sveltinio/${PACKAGE}" --force
    else
        # run the action
        pnpm turbo $ACTION --filter="@sveltinio/${PACKAGE}"
    fi
fi
