
require.config({ paths: { vs: 'https://unpkg.com/monaco-editor@latest/min/vs' }});

require(['vs/editor/editor.main'], function () {

  const code  = monaco.editor.create(document.getElementById('code'), {
    value: `
<h1 class="cfont_size_40 ctext_orange">Hello Dear</h1>
<div class="cdisplay_flex cgap_10">
<div class="cbackground_color_blue cheight_300 cwidth_200"></div>
<div class="cbackground_color_pink  cheight_300 cwidth_200"></div>
</div>
  `,
  language: 'html',
    theme: 'vs-dark'
  });

  const screen = document.getElementById("screen");


function applyStyle(element) {
    const classes = element.classList;


    classes.forEach((cls) => {

        if (cls.startsWith("ctext_")) {
            const value = cls.split("_")[1];
            element.style.color = value;
        }
        if (cls.startsWith("cpadding_")) {
            const value = cls.split("_")[1];
            element.style.padding = value + "px";
        }

        if (cls.startsWith("cfont_size_")) {
            const value = cls.split("_")[2];
            element.style.fontSize = value + "px";
        }
        if (cls.startsWith("cbackground_color_")) {
            const value = cls.split("_")[2];
            element.style.backgroundColor = value;
        }
        if (cls.startsWith("cborder_")) {
            const parts = cls.split("_");

            const width = parts[1];
            const style = parts[2];
            const color = parts[3];

            element.style.border = width + "px " + style + " " + color;
        }
        if (cls.startsWith("cmargin_")) {
            const value = cls.split("_")[1];
            element.style.margin = value + "px";
        }
      
         if(cls.startsWith("cdisplay_")){
            const value= cls.split("_")[1];
            element.style.display = value;
         }
         
         if(cls.startsWith("cfont_style_")){
            const value= cls.split("_")[2];
            element.style.fontFamily = value;
         }
         
         if (cls.startsWith("cheight_")) {
            const value = cls.split("_")[1];
            element.style.height = value +"px";
         }

          if (cls.startsWith("cwidth_")) {
            const value = cls.split("_")[1];
            element.style.width = value +"px";
         }

          if (cls.startsWith("cmargin_top_")) {
            const value = cls.split("_")[2];
            element.style.marginTop = value + "px";
        }

         if (cls.startsWith("cmargin_bottom_")) {
            const value = cls.split("_")[2];
            element.style.marginBottom = value + "px";
        }

         if (cls.startsWith("cmargin_right_")) {
            const value = cls.split("_")[2];
            element.style.marginRight = value + "px";
        }

         if (cls.startsWith("cmargin_left_")) {
            const value = cls.split("_")[2];
            element.style.marginLeft = value + "px";
        }

        if (cls.startsWith("cflex_direction_")) {
            const value = cls.split("_")[2];
            element.style.flexDirection = value;
        }

        if (cls.startsWith("cgap_")) {
            const value = cls.split("_")[1];
            element.style.gap= value +"px";
        }

        if (cls.startsWith("cflex_justifycontent_")) {
            const value= cls.split("_")[2];
            element.style.justifyContent= value;
        }

         if (cls.startsWith("cflex_alignitems_")) {
            const value= cls.split("_")[2];
            element.style.alignItems = value;
        }
    });
}



function updatePreview() {
    const codeValue = code.getValue();

    
    screen.innerHTML = codeValue;

    document.querySelectorAll("#screen *").forEach((element) => {
        applyStyle(element);
    });
}
code.onDidChangeModelContent(updatePreview);
  updatePreview();
})