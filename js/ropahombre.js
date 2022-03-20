const d = document;

const $wrapper = d.querySelectorAll(".wrapper"),
    $box = d.querySelector(".box"),
    $sl = d.querySelectorAll(".sl"),
    $description = d.querySelector(".description"),
    $principal = d.querySelector(".principal"),
    $buy = d.querySelector(".buy"),
    $mtd = d.querySelector(".mtd"),
    $cancel = d.querySelector(".cancel"),
    $confirmar = d.querySelector(".confirmar"),
    $tarjeta = d.querySelector(".tarjetaN"),
    $fechaC = d.querySelector(".fechaC"),
    $titular = d.querySelector(".titularT"),
    $xxxT = d.querySelector(".xxxT"),
    $pago = d.querySelector(".pago");

function addDescription(){ // Muestra información sobre la prenda o calzado
    
    for(let i = 0; i < $wrapper.length; i++){
        let cl = $wrapper[i].classList[1];
        const $img = d.querySelector(`.${cl} img`),
            $ul = d.querySelector(`.${cl} div`);

        $wrapper[i].addEventListener("mouseenter", (e) => {
            $ul.classList.add("onS");

        })

        $wrapper[i].addEventListener("mouseleave", (e) => {
            $ul.classList.remove("onS");

        })

    }

}

function addAtrImg(){ // Cuando hacemos click en cualquier prenda, se abrira una ventana con la imagen
    // de la prenda de mayor tamaño

    for(let i = 0; i < $sl.length; i++){
            
        let wrP = $wrapper[i].classList[1],
            enlace = d.querySelector(`.${wrP} a`),
            img = d.querySelector(`.${wrP} img`),
            ul = d.querySelectorAll(`.${wrP} li`);

        $sl[i].addEventListener("click", (e) => {
            $description.innerHTML = "";

            for(const item of ul){
                let itm = d.createElement("li");
                itm.textContent = item.textContent;
                $description.appendChild(itm);

            }

            let x = img.src.split("/"),
                url = x[x.length - 1];
                
            url = url.slice(0, url.indexOf("."));
            x.pop()
            x = x.join("/");

            $principal.src = `${x}/${url}600500.jpg`;
            scroll(0, 0);

            $box.classList.add("mtdP");

        })

    }

}

function buyP(){ // Abre una ventana donde se mostrara el método de pago

    $buy.addEventListener("click", (e) => {
        for(const x of $wrapper){
            x.style.display = "none";
        }

        $box.classList.remove("mtdP");
        $mtd.style.display = "grid";
        
    })

}

function initialState(){ // Regresa toda la interfaz a su estado inicial cuando se hace click en el 
    // boton con la clase .cancel

    $cancel.addEventListener("click", (e) => {
        imgAndRp();
        
    })

}

function imgAndRp(){
    for(const x of $wrapper){
        x.style.display = "block";
    }

    $mtd.style.display = "none";

}

/**Validación de compra */

function fmValidation(){

    $pago.addEventListener("submit", (e) => {
        e.preventDefault();

        let fecha = /^[0-9]{1,2}\/[0-9]{4}$/;

        if(!isNaN($tarjeta.value) && fecha.test($fechaC.value) && isNaN($titular.value) && !isNaN($xxxT.value)){
            $pago.submit();
            $pago.reset();
            imgAndRp();
            
        }

    })

}

d.addEventListener("DOMContentLoaded", () => {
    addDescription();
    addAtrImg();
    buyP();
    initialState();
    fmValidation();
    

})
































































































































