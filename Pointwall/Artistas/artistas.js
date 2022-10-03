
document.addEventListener('DOMContentLoaded', ()=> {

    const card_container = document.querySelector("section.cards-container");

    card_container.insertAdjacentHTML("afterbegin", '<div class="card"><img src="" alt=""><div class="card-info mural"><div class="text-info"><span class="title">Lorem</span><span class="artista">Lorem, ipsum dolor.</span></div><i class="fa-solid fa-paint-roller fa-2x"></i></div></div>');

});



/*

    base datos -> request -> variable

*/

/*

            <div class="card">
                <img src="https://picsum.photos/400/600" alt="">
                <div class="card-info mural">
                    <div class="text-info">
                        <span class="title">Lorem</span>
                        <span class="artista">Lorem, ipsum dolor.</span>
                    </div>
                    <i class="fa-solid fa-paint-roller fa-2x"></i>
                </div>
            </div>


            <div class="card"><img src="" alt=""><div class="card-info mural"><div class="text-info"><span class="title">Lorem</span><span class="artista">Lorem, ipsum dolor.</span></div><i class="fa-solid fa-paint-roller fa-2x"></i></div></div>

*/