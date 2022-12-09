#!/bin/sh

projectFolder="../"
echo "- Cleaning the project root folder"
rm -rf "${projectFolder}/node_modules"

foldersToRemove=("dist" ".svelte-kit" ".turbo" "node_modules" "coverage")

packagesFolder="${projectFolder}/packages"
packagesList=("eslint-config-custom" "stylelint-config-custom" "essentials" "media-content" "seo" "services" "widgets")
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

