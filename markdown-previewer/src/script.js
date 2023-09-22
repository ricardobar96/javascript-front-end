window.onload = function() {
  document.getElementById("editor").innerHTML = initialText;
  document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
}

document.getElementById('editor').addEventListener('input', function (event){
    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
}, false);

const initialText = 
`# Heading title
## Subheading title

[Link](https://www.google.es/) example

Code: \`<div></div>\`

\`\`\`
//Multi-line code: 
function(number){ 
  return number + 2; 
} 
\`\`\`

List:
1. **First** item
> A blockquote
2. **Second** item
3. **Third** item

![Alt text](https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/google.svg)
`
;