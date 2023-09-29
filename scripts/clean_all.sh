#!/usr/bin/env bash

projectFolder=".."
echo "- Cleaning the project root folder"
rm -rf "${projectFolder}/node_modules"

foldersToRemove=("dist" ".svelte-kit" "node_modules" "coverage")

packagesFolder="${projectFolder}/packages"
packagesList=("eslint-config-custom" "stylelint-config-custom" "postcss-utils" "essentials" "media-content" "seo" "services" "widgets")
for package in ${packagesList[@]}
do
    echo "- Cleaning: $package"
    for folder in ${foldersToRemove[@]}
    do
        if [[ -d "$packagesFolder/$package/$folder" ]]; then
            echo "  - Removing folder: $folder"
            rm -rf "$packagesFolder/$package/$folder"
        fi
    done
done

echo "- Find and delete styles.css file for components in the widgets package"
stylesCSSFiles=( $(find ${projectFolder}/packages/widgets -type f \( -name "styles.css" \)) )
# loop over it
for f in ${stylesCSSFiles[@]}
do
    rm $f
done

#
#sitesFolder="sites"
#sitesList=("components.sveltin.io")
#for site in ${sitesList[@]}
#do
#    echo "- Cleaning: $site"
#    for folder in ${foldersToRemove[@]}
#    do
#        if [[ -d "$sitesFolder/$site/$folder" ]]; then
#            echo "  - Removing folder: $folder"
#            rm -rf "$sitesFolder/$site/$folder"
#        fi
#    done
#done

