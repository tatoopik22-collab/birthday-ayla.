body{

    margin:0;

    padding:0;

    background:#ffd6e7;

    font-family:Arial;

    text-align:center;

}

#gift{

    font-size:120px;

    margin-top:80px;

    cursor:pointer;

}

#gift p{

    font-size:25px;

}

#content{

    display:none;

    animation:fade 1s;

}

.gallery{

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

    margin-top:20px;

}

.gallery img{

    width:220px;

    border-radius:20px;

    box-shadow:0 5px 15px rgba(0,0,0,.3);

    transition:.3s;

}

.gallery img:hover{

    transform:scale(1.05);

}

@keyframes fade{

    from{

        opacity:0;

    }

    to{

        opacity:1;

    }

}
