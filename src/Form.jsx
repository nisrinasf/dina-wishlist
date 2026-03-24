import { useState } from 'react';
import Show from './Show';

export default function Form() {

  let initialBooks = [
    {judul: 'Rindu', harga: '100.000'},
    {judul: 'Daun Yang Jatuh Tidak Pernah Membenci Angin', harga: '91.000'},
    {judul: 'Hafalan SHolat Delisa', harga: '88.000'},
    {judul: 'Ayahku Bukan Pembohong', harga: '87.000'},
    {judul: 'Bumi', harga: '100.000'},
    {judul: 'Seni Bersikap Bodo Amat', harga: '99.000'},

  ]
  const [answer, setAnswer] = useState(initialBooks);
  const [books, setBooks] = useState({judul: '', harga: ''});

  
  function handleJudulChange(e) {
    setBooks({
      ...books,
      judul: e.target.value
    });
  }

  function handleHargaChange(e) {
    setBooks({
      ...books,
      harga: e.target.value
    });
  }

 function handleClick(){
      setAnswer([
          ...answer,
          { judul: books.judul, harga: books.harga }
        ]);

        setBooks({
            ...books,
            harga: '', judul: ''
        })
 }
  
  return (
    <>
    <div style={{margin:'50px'}}>
      <form style={
            {padding: '50px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '25px',
            justifyContent: 'center',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }}>
        <h3>My Wishlist Book</h3>
        <textarea
        style={{
            borderRadius: '5px',
            padding: '8px',
            border: '2px solid indigo'
        }}
        placeholder='Judul'
          value={books.judul}
          name='judul'
          onChange={handleJudulChange}
        />
     
        <textarea
        style={{
            borderRadius: '5px',
            padding: '8px',
            border: '2px solid indigo'
        }}
        placeholder='Harga'
          value={books.harga}
          onChange={handleHargaChange}
        />
       
        <br />
        <button 
        style={{
            width: '250px',
            padding: '10px 5px',
            alignSelf: 'center',
            borderRadius: '8px',
            backgroundColor: 'indigo',
            color: 'white',
               fontSize: '15px',
        }}
        type='button'
        disabled={
          books.length === 0 
        }
        onClick={handleClick}
        >
          Tambahkan
        </button>
      </form>
      

   
    <div style={
        {marginTop: '50px',
        display:'flex',
        rowGap: '50px',
        columnGap: '8px',
        flexWrap: 'wrap-reverse',
        justifyContent: 'end',
        alignItems: 'end',
        flexDirection: 'row-reverse'
        }
    }>

    {answer.map((e,i) => (
    <div className='card' style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        maxWidth: '300px',
        width: '250px',
        margin: 'auto',
        padding: '10px 20px 20px 20px',
        textAlign: 'center'
    }}>
      <h3>{e.judul}</h3>
     <p className="price" style={{
         color: 'grey',
         fontSize:' 15px',
         padding: '10px 0'
     }} >Rp.{e.harga}</p>
     
     <p><button style={
        {
        padding: '10px 0px',
        border: 'none',
        outline: '0',
        padding: '12px',
        color: 'white',
        backgroundColor: 'indigo',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%',
         borderRadius: '8px',
        fontSize: '15px',
        }
     }>Wishlist</button></p>

    </div>
    ))}

    </div>
    </div>
    </>
  );
}

