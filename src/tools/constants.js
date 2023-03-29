export let wallet_api 
  
  if (window.location.origin === 'https://indacoin.io') {
    wallet_api  = 'https://wallet.indacoin.io'
  } else if (window.location.origin === 'https://s.indacoin.io') {
    wallet_api  = 'https://swallet.indacoin.io'
  }else{
    wallet_api  = 'https://swallet.indacoin.io'
  }