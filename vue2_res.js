const arr = [
	14.316625118255615, 8.593374729156494, 9.696583271026611, 14.482082843780518,
	14.224833011627197, 16.74025011062622, 14.423541069030762, 14.348790645599365,
	16.123083114624023, 13.188957691192627, 14.757874965667725,
	16.243957996368408, 15.412333965301514, 13.645417213439941, 14.38570785522461,
	16.26437520980835, 14.992042064666748, 15.249666690826416, 16.20437526702881,
	15.729750156402588, 13.871249675750732, 16.499249935150146, 15.59499979019165,
	15.284625053405762, 15.321291446685791, 14.56862497329712, 16.67804193496704,
	14.795000076293945, 14.15137529373169, 16.492249965667725, 14.651000022888184,
	15.915292263031006, 15.70645809173584, 16.305624961853027, 14.455792427062988,
	15.579500198364258, 15.818874835968018, 14.509207725524902,
	16.054166793823242, 15.164332866668701, 16.269875049591064,
	14.226541996002197, 16.018542289733887, 15.480916976928711,
	15.977666854858398, 15.364375114440918, 15.467041015625, 15.249500274658203,
	13.68975019454956, 16.1475830078125, 13.988209247589111, 17.006375312805176,
	15.217458248138428, 14.887208938598633, 18.768499851226807,
	11.237165927886963, 15.577875137329102, 15.263291835784912,
	15.520792007446289, 16.01770782470703, 14.229291915893555, 16.947332859039307,
	15.136667251586914, 15.802916049957275, 14.815000057220459, 8.826708793640137,
	12.927916049957275, 13.105041980743408, 15.19670820236206, 15.468457698822021,
	15.813499927520752, 16.058499813079834, 14.57620906829834, 15.823209285736084,
	15.49162483215332, 15.07450008392334, 16.049499988555908, 15.073290824890137,
	16.097832679748535, 14.659832954406738, 15.372167110443115,
	16.172625064849854, 15.240292072296143, 15.078207969665527,
	14.884832859039307, 16.725124835968018, 14.963042259216309,
	15.237500190734863, 15.69404125213623, 15.794917106628418, 14.412416934967041,
	16.342750072479248, 15.421249866485596, 14.84704065322876, 15.861499786376953,
	15.230207920074463, 15.548125267028809, 15.630208015441895,
	15.313958168029785, 15.776709079742432, 15.340917110443115,
	16.359708309173584, 14.620957851409912, 15.810333251953125,
	14.873457908630371, 15.658041954040527, 16.37320899963379, 14.485874652862549,
	15.496959209442139, 15.922083854675293, 15.277124881744385,
	15.813624858856201, 15.03137493133545, 16.153625011444092, 14.870832920074463,
	15.552499771118164, 14.422290802001953, 15.116915702819824,
	14.984874725341797, 14.977917194366455, 16.49008321762085, 15.245208740234375,
	15.75795841217041, 15.438167095184326, 15.332749843597412, 15.263124942779541,
	15.777541637420654, 15.832249641418457, 13.907666683197021,
	14.691625118255615, 16.989375114440918, 14.985374927520752,
	15.596250057220459, 15.752874851226807, 15.780333042144775, 14.85829210281372,
	16.093541622161865, 15.174458980560303, 14.912041187286377, 15.98620891571045,
	15.13408374786377, 16.520083904266357, 14.882458209991455, 15.034290790557861,
	15.204750061035156, 15.797874927520752, 16.15275001525879, 14.769165992736816,
	114.36950016021729, 14.93933391571045, 22.675665855407715, 23.81825017929077,
	21.696332931518555, 15.128790855407715, 13.075999736785889,
	13.171542167663574, 16.96387481689453, 14.588458061218262, 16.884209156036377,
	13.042209148406982, 16.343332767486572, 112.02824974060059,
	18.561083793640137, 18.010499954223633, 23.927916049957275,
	16.030457973480225, 18.620666027069092, 13.58079195022583, 15.005374908447266,
	13.697332859039307, 17.00820779800415, 26.141458988189697, 18.8117094039917,
	11.621874809265137, 15.339750289916992, 16.387875080108643,
	23.301583290100098, 26.73337459564209, 77.19304180145264, 17.121124744415283,
	21.529624938964844, 27.6802077293396, 24.345750331878662, 23.964416980743408,
	19.03379201889038, 26.18958330154419, 16.80695915222168, 30.841958045959473,
	15.34279203414917, 14.49958324432373, 14.7100830078125, 16.999958038330078,
	15.878790855407715, 18.103167057037354, 23.497832775115967, 18.3493332862854,
	14.40154218673706, 14.746500015258789, 16.882041931152344, 12.316708087921143,
];

const res = arr.reduce((val, cur) => val + cur, 0);
console.log(res);

// Сумма значений 3452.9816217422485

const arr1 = [];

for (let i = 0; i < arr.length; i++) {
	arr1[i] = arr[i] - 17.26490811; // Среднее арифметическое
}

// console.log(arr1.join('\n'));

console.log(arr1.reduce((val, cur) => val + cur, 0)); // -2.5775118217552517e-7
