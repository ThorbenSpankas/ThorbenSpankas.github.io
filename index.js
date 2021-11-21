import Web3 from "web3";

function registerConnect() {
	// Modern dapp browsers...
  console.log("klappt bis hier");
  if (window.ethereum) {

    console.log("passt");
      window.web3 = new Web3(window.ethereum)
      try {
          // ask user for permission
          ethereum.enable()
          // user approved permission
      } catch (error) {
          // user rejected permission
          console.log('user rejected permission')
      }
      console.log("hm");
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      // no need to ask for permission
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
    console.log (window.web3.currentProvider)
    
    // contractAddress and abi are setted after contract deploy
    var contractAddress = '0x5a1CCB630B8c227703E0db7F476df7f52c9E97ec';
    var abi = JSON.parse('[{"inputs": [],"name": "getInfo","outputs": [{"internalType": "uint256","name": "amount","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "uint256","name": "_bet_amount","type": "uint256"}],"name": "putBet","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "takeBet","outputs": [],"stateMutability": "payable","type": "function"},{"inputs": [],"name": "resolve_bet","outputs": [],"stateMutability": "payable","type": "function"}]');
    
    //contract instance
    contract = new web3.eth.Contract(abi, contractAddress);
    
    // Accounts
    var account;
    
    web3.eth.getAccounts(function(err, accounts) {
      if (err != null) {
        alert("Error retrieving accounts.");
        return;
      }
      if (accounts.length == 0) {
        alert("No account found! Make sure the Ethereum client is configured properly.");
        return;
      }
      account = accounts[0];
      console.log('Account: ' + account);
      web3.eth.defaultAccount = account;
    });
  }