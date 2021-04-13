//List of Advertiser IDs, which should be blocked
const advertisers = ['4578684176', '18533110', '22636870', '50832550', '22507630', '4437259608', '18017830', '4902843726', '4762479984', '62142310', '61127230', '4604560024'];

var scripts = document.getElementsByTagName('script');
var script = scripts[scripts.length - 1];
var scriptURL = script.src;

var searchParams = new URL(scriptURL).searchParams;
console.log(searchParams.toString());
console.log('-');
console.log(searchParams.get('sadv'))
if (advertisers.indexOf(searchParams.get('sadv')) == -1) {
	//Inject DoubleVerify script
	var dvtp_src = document.createElement('script');
	dvtp_src.setAttribute('src','https://cdn.doubleverify.com/dvtp_src.js?'+searchParams.toString());
	document.head.appendChild(dvtp_src);
}
