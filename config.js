/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '****@qq.com';
// email 登陆密码
const emailPassword = '********';
// 接收者 邮箱
const toEmail = '****@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '****',
		'phone': '132*****678',
		'cookies': '********'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};