import Web3 from 'web3';

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
  //Will Start the metamask extension
  ethereum.request({ method: 'eth_requestAccounts' });
});
// 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