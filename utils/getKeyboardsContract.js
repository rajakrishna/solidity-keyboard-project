import { ethers } from 'ethers';

import abi from '../utils/Keyboards.json';

const contractAddress = '0x4098eBf9D36DC3a6C8865147F5A8152cae6AC91F';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
	if (ethereum) {
		const provider = new ethers.providers.Web3Provider(ethereum);
		const signer = provider.getSigner();
		return new ethers.Contract(contractAddress, contractABI, signer);
	} else {
		return undefined;
	}
}
