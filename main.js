function applyStyle(el){
    const classes = el.classList;


    classes.forEach((cls) => {

    if (cls.startsWith("ct_")) {
            const value= cls.split("_")[1];
            el.style.color = value;
        }
 if (cls.startsWith("cp_")){ 
      const value = cls.split("_")[1]; 
      el.style.padding = value + "px";
    }

    if (cls.startsWith("cfs_")) {
        const value = cls.split("_")[1];
        el.style.fontSize = value + "px";
    }
    if (cls.startsWith("cbg_")) {
        const value = cls.split("_")[1];
        el.style.backgroundColor = value;
    }
    if (cls.startsWith("cb_")) {
        const parts= cls.split("_");

        const width = parts[1] ;
        const style = parts[2] ;
        const color = parts[3] ;

        el.style.border = width + "px " + style + " " + color;
    }
    if (cls.startsWith("cm_")) {
        const value = cls.split("_")[1];
        el.style.margin = value + "px";
    }
   if (cls.startsWith(cd_)) {
    
   }
    });
}

document.querySelectorAll("*").forEach((el)=>{
    applyStyle(el);
});