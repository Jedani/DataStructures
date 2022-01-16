let maxSubArray = function (nums) {
	let maxNum = nums.reduce((a, b) => a + b, 0);

	console.log(maxNum);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
