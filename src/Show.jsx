export default function Show({judul, harga}){
    return(
    <>
      Buku : <div id="answer-judul">{judul}</div>
      <br/>
      Harga : <div id="answer-harga">{harga}</div>
    </>
    )
}