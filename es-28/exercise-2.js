const order = {
  customer:{
    address:{
     city: 'Roma'

    }
  }
};


if(!order?.customer?.address?.city){
  console.log('City is required');
}else{
  console.log('correct')
};