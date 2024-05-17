function solve(num,mapp) {
	if(num==1 || num==2) return num-1;
	
	if(mapp.has(num)) return mapp.get(num);
	
	const ans= solve(num-1,mapp)+solve(num-2,mapp);
	mapp.set(num,ans);
	
	return ans;
}

function fibonacci(num) {
// your code here
	const mapp=new Map();
	return solve(num,mapp);
}

module.exports = fibonacci;
