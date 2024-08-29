

export const Block = props => {

    if(!props.state.cart)
    {
        props.state.cart = []
    }




    let size = props.state.cart.includes(props.book.title)?30:35

    return <c-c style={{
        width: 150, height: 270, flex: 1, minWidth: 150,
        position: "relative", backgroundColor:"#EEC78D", borderRadius:20,margin:"10px",boxShadow:"0px 0px 20px 3px rgba(0,0,0,0.43)"
    }}>

        <img
            className={global.styles.hover}
            src={props.book.imageLink}
            style={{
                 width: "100%", height: 200, objectFit: "fill", flex: 1, minWidth: 150, borderRadius:25
             }}
            onClick={() => {
                props.state.form = "bookspecs"
                props.state.book = props.book
                props.refresh()
               
               
            }} />

            <f-cc style={{padding:"5px 8px",width: "100%",height:40}}>
                <f-12>{props.book.title}</f-12>
            </f-cc>

            <f-csb style={{width: "100%",padding:"5 px 0"}}>
                <img src={props.state.cart.includes(props.book.title)?
                "https://irmapserver.ir/qepal/ok.svg":
                "https://irmapserver.ir/research/34/vecteezy_christmas-tote-bag-3d-christmas-art-red-white_47530372.png"}
                style={{height:size, width:size, objectFit:"contain",
                     margin:"0 10px"
                }}/>

                <c-x style={{direction:"ltr",margin:"0 5px"}}>
                    <f-10> <del>{(props.book.price as number).toLocaleString("en-UK")} toman</del> </f-10>
                    <f-12>{(props.book.price*0.8 as number).toLocaleString("en-UK")} toman </f-12>
                </c-x>

            </f-csb>

    </c-c>
}

