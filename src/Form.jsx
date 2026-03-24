import { useState } from 'react';
import Show from './Show';

export default function Form() {

  let buttonStyle = {
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
  let initialBooks = [
    {id: 0 ,judul: 'Rindu', selesai: true, harga: '100.000'},
    {id: 1 ,judul: 'Daun Yang Jatuh Tidak Pernah Membenci Angin', selesai: false, harga: '91.000'},
    {id: 2 ,judul: 'Hafalan SHolat Delisa', selesai: false, harga: '88.000'},
    {id: 3 ,judul: 'Ayahku Bukan Pembohong', selesai: true, harga: '87.000'},
    {id: 4 ,judul: 'Bumi', selesai: false, harga: '100.000'},
    {id: 5 ,judul: 'Seni Bersikap Bodo Amat', selesai: false, harga: '99.000'},

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

 function handleClick(num){
      setAnswer([
          ...answer,
          { id:num,  judul: books.judul, harga: books.harga, selesai: false }
        ]);

        setBooks({
            ...books,
            harga: '', judul: ''
        })
 }

  function handleWish(id) {
    setAnswer(answer.map(item => {
      if (item.id == id) {
        return {
          ...item,
          selesai: true,
        };
      } else {
        return item;
      }
    }));
  }

  function setEnable(){
    return true
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
          required
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
          required
          onChange={handleHargaChange}
        />
       
        <br />
        <button 
        type='button'
        
        style={{
            width: '250px',
            padding: '10px 5px',
            alignSelf: 'center',
            borderRadius: '8px',
            backgroundColor: 'indigo',
            color: 'white',
            fontSize: '15px',
        }}
        disabled={
          books.judul.length === 0 || books.harga.length === 0 
        }
        onClick={() => handleClick(answer.length)}
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
        flexDirection: 'row-reverse',
        
        }
    }>

    {answer.map((e,i) => (
    <div className='card'  key={e.id} style={{
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        width: '250px',
        height: '200px',
        margin: 'auto',
        padding: '10px 20px 0px 20px',
        textAlign: 'center',
        position: 'relative'
    }}>
      <h3 style={{minHeight: '50px'}}>{e.judul}</h3>
     <p className="price" style={{
         color: 'grey',
         fontSize:' 15px',
         padding: '10px 0 0 0'
     }} >Rp.{e.harga}</p>
     
     <p style={{  position: 'absolute',
        bottom: '10px', left: '10px', right: '10px'}}>
        { e.selesai ? (<button 
        type='button'
        disabled
        onClick={() => handleWish(e.id)}
        style={
        {...buttonStyle, ...{backgroundColor: 'grey'}} 
     }>Wishlist</button>) : (<button 
        type='button'
        onClick={() => handleWish(e.id)}
        style={
        buttonStyle
     }>Wishlist</button>)}</p>

    </div>
    ))}

    </div>
    </div>
    </>
  );
}

