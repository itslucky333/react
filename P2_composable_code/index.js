function MainTitle(){
    return (
        <h1>this is render tite</h1>
    )
}
function BodyPart(){
    return(
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non suscipit, facere nisi perspiciatis molestias beatae deleniti at est consequuntur dolor esse totam ullam quod rerum officiis natus hic a eligendi. Excepturi laborum delectus quam recusandae, porro praesentium necessitatibus! Tempore exercitationem dolore necessitatibus atque debitis quos fugiat cum possimus maiores.
        </p>
    )
}
function Footer(){
    return(
        <h6>this is footer</h6>
    )
}

ReactDOM.render( <div>
<h2>this is heading</h2>
<MainTitle/> 
<BodyPart />
<Footer />
</div>
,
 document.getElementById("here"))