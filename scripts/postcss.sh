#!/bin/sh

postcssFiles=( $(find $1 -type f \( -name "*.postcss" ! -name "app.postcss" \)) )

# loop over it
for f in ${postcssFiles[@]}
do
    filename="${f%.*}"
    output="${filename}.css"

    echo "Running postcss on ${f}"
    postcss $f -o $output

    echo "Saved as ${output}"
    echo ""
done


