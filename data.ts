type Product = {
  id: number;
  title?: string;
  desc?: string;
  img?: string;
  price?: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 101,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/371891513_715359983673073_8371142120611572029_n_uy5fal.jpg",
  },
  {
    id: 100,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/376388774_811952363743830_6925793279405463663_n_qpxsdu.jpg",
  },
  {
    id: 99,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/375024418_749364236993896_4757534380252299844_n_py5pjz.jpg",
  },
  {
    id: 98,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/375613718_1844436772687937_6313302452016476943_n_i7a2mu.jpg",
  },
  {
    id: 97,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187059/371950376_3009407782524460_5556854442298344424_n_sz7mxp.jpg",
  },
  {
    id: 96,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368270031_727602119380262_3133457759484143262_n_zzquj8.jpg",
  },
  {
    id: 95,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368511413_149580181518747_3816350921604268090_n_zs0tgd.jpg",
  },
  {
    id: 94,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368565067_1461967627891725_3584572344471272201_n_ykryaj.jpg",
  },
  {
    id: 93,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/367536914_1456972691754929_5796399773470241333_n_djhptg.jpg",
  },
  {
    id: 92,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368395679_1466732064139974_3193278221953923635_n_wwvzby.jpg",
  },
  {
    id: 91,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693326/368510236_2440094406172841_1382975695466795608_n_vmeo7g.jpg",
  },
  {
    id: 90,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/327983251_956884159055687_2388907758250702355_n_jrsmxr.jpg",
  },
  {
    id: 89,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/331748127_541383211422110_6497215977668603667_n_a0nofx.jpg",
  },
  {
    id: 88,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/333926285_3455970194673873_3869944656913923682_n_b79vys.jpg",
  },
  {
    id: 87,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/330889407_1302882917278242_1030605262565508693_n_agxsfm.jpg",
  },
  {
    id: 86,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/334808918_1370709887039686_6324894804406651933_n_usbgxh.jpg",
  },
  {
    id: 85,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151117/329008463_603304851664319_5414585855499662716_n_zbpyyr.jpg",
  },
  {
    id: 84,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151118/336468387_3446005142342196_4013552360847112493_n_jyb6u9.jpg",
  },
  {
    id: 83,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151118/335014842_218402197437170_7073042888342785945_n_kcdfko.jpg",
  },
  {
    id: 82,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151118/348363422_1424110455006202_391998239802835701_n_n1hbaf.jpg",
  },
  {
    id: 81,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151118/342728456_815274173354677_6465864418984533103_n_ppbqy4.jpg",
  },
  {
    id: 80,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151118/336602106_1757023438045765_2693417255450282154_n_d4olcr.jpg",
  },
  {
    id: 79,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151119/352589454_790992515795546_5655519906818952890_n_xq44k0.jpg",
  },
  {
    id: 78,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151119/348364169_1297477687516174_6643544631306448425_n_dokdup.jpg",
  },
  {
    id: 77,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151119/351443751_981623679653022_6738147946123912157_n_omz7hp.jpg",
  },
  {
    id: 76,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151120/352650116_640635914290731_8158076896762653700_n_jvqv4s.jpg",
  },
  {
    id: 75,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151120/352768008_958174005305752_6816556387245768205_n_aw3djy.jpg",
  },
  {
    id: 74,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151120/352546746_6159480324136581_2838048578620375869_n_akavj0.jpg",
  },
  {
    id: 73,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151120/352790308_948179756334450_7087166680087473914_n_wszsux.jpg",
  },
  {
    id: 72,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151121/352840790_252269520784510_4770090707978537291_n_xzl9a8.jpg",
  },
  {
    id: 71,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1686151121/352807322_751157550083230_7087666260794425274_n_nppyp3.jpg",
  },
  {
    id: 70,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012223/332045720_754159302720057_641483849388799894_n_brdwow.jpg",
  },
  {
    id: 69,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012223/332569089_730107231971712_8194797688974084734_n_ebkrpy.jpg",
  },
  {
    id: 68,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012223/330483624_923176552189930_1302272725521806401_n_nbcelm.jpg",
  },
  {
    id: 67,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012222/331936924_990429165271821_3915636585172937695_n_khycwr.jpg",
  },
  {
    id: 66,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012222/322944574_860169645300593_5451788581433957074_n_sijhfo.jpg",
  },
  {
    id: 65,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012222/331099341_504271441887923_1329325019759713410_n_snbfsk.jpg",
  },
  {
    id: 64,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012221/322851053_551626750160248_8042744774630206811_n_wjs11n.jpg",
  },
  {
    id: 63,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012221/327310376_6116682861709888_7763173638913063741_n_ovpjlb.jpg",
  },
  {
    id: 62,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012221/325103186_680301053574821_8733324241977586514_n_jdlcs5.jpg",
  },
  {
    id: 61,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012221/319378816_694539362197199_2168045428028007069_n_xnevsq.jpg",
  },
  {
    id: 60,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/319552236_956651725313457_3781098647968575029_n_xnlgfr.jpg",
  },
  {
    id: 59,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/318288334_1622937841459495_6297191667360674658_n_x3zqxj.jpg",
  },
  {
    id: 58,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/318462917_517754936780200_8278468160263279042_n_zmwumw.jpg",
  },
  {
    id: 57,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/318360164_688662596196693_5048974575190429329_n_gr0rjv.jpg",
  },
  {
    id: 56,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/318582703_684860279892529_1885977914247954897_n_lmu68t.jpg",
  },
  {
    id: 55,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012220/318639496_650622426761952_7525118517423248740_n_mk6th0.jpg",
  },
  {
    id: 54,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1677012219/318072699_565483922089053_1139572238459594618_n_hhyyvp.jpg",
  },
  {
    id: 53,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535186/309230431_431952859040233_3640487946881354010_n_xcl1wq.jpg",
  },
  {
    id: 52,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535186/311866961_668749804560740_4853252394313503680_n_cjfket.jpg",
  },
  {
    id: 51,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535186/293451800_768599517605637_3530864768504161894_n_aalasz.jpg",
  },
  {
    id: 50,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/309503623_621236402794634_896876017278673978_n_gdzkw8.jpg",
  },
  {
    id: 49,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/308620446_1148921639045577_8490443758651901578_n_nwktqb.jpg",
  },
  {
    id: 48,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/309362102_3316716848597836_3634616617804681346_n_srwpxz.jpg",
  },

  {
    id: 47,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/309413343_1071505330203824_6584516362845108890_n_w3qyts.jpg",
  },
  {
    id: 46,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/309282711_863754528402464_5109456027872672538_n_yd1q1g.jpg",
  },
  {
    id: 45,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535187/309738143_2882908048672387_5251630917270195361_n_ohofv6.jpg",
  },
  {
    id: 44,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1669535188/309377075_643872440485695_3514138869853655337_n_cfvnhr.jpg",
  },
  {
    id: 43,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1659883153/cake3_isr0m5.jpg",
  },
  {
    id: 42,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1659883147/cake2_szmzhd.jpg",
  },
  {
    id: 41,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1659882964/cake1_kobj9e.jpg",
  },
  {
    id: 40,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658002860/2127415117348007562_slktyh.jpg",
  },
  {
    id: 39,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001993/294100030_594367609004929_2796450824537088963_n_lrer0f.jpg",
  },
  {
    id: 38,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001964/293281341_736395740899785_4407259825541307718_n_trt1ql.jpg",
  },
  {
    id: 37,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001944/288361171_972289443436930_8226033006520123290_n_y0p4ro.jpg",
  },
  {
    id: 36,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001896/275112975_1015700709369988_541704685655406608_n_vlm3mv.jpg",
  },
  {
    id: 35,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001962/289194848_335899995414905_7146962461602643994_n_sersz4.jpg",
  },
  {
    id: 34,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001962/289050118_1659040704475836_5804916301806743412_n_bmi7ac.jpg",
  },
  {
    id: 33,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001965/293360695_1751874428484224_429012949632177307_n_uyaieg.jpg",
  },
  {
    id: 32,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001967/293408422_557996005806358_5116127242876060993_n_mwyg1k.jpg",
  },
  {
    id: 31,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001979/293448324_396611009000706_3307098636862807547_n_i08j7y.jpg",
  },
  {
    id: 30,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001980/293488932_801498667509368_224796387308066782_n_jby0bc.jpg",
  },
  {
    id: 29,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001981/293568500_888331715458226_7565389593031730907_n_lpqas9.jpg",
  },
  {
    id: 28,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001982/293571644_728485805050949_6296873855733906784_n_bttkpc.jpg",
  },
  {
    id: 27,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001984/293642650_562920545374624_4485608055638282464_n_gmcnd4.jpg",
  },
  {
    id: 26,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001984/293689300_389587716393624_6474039005022737352_n_lfs5nm.jpg",
  },
  {
    id: 25,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001984/293693912_1453503485086784_1157759137879926903_n_kfn2qy.jpg",
  },
  {
    id: 24,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001991/293755809_984597072215661_3092854933712892221_n_knztad.jpg",
  },
  {
    id: 23,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001991/293724722_1205744146926654_4090114219226340063_n_p8h7zf.jpg",
  },
  {
    id: 22,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001993/293830909_729425401504684_9140928826409079572_n_v69u3b.jpg",
  },
  {
    id: 21,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001994/293967552_448977773900387_8161476442189161328_n_axvtoh.jpg",
  },
  {
    id: 20,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001994/294170550_1076914763205826_8414800623619510678_n_w3hy4n.jpg",
  },
  {
    id: 19,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1658001993/293874147_574091094297536_5328679547647851828_n_eymyem.jpg",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991896/199021603_337563851146013_1820081536116013733_n_yfmjco.jpg",
  },

  {
    id: 2,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991891/191403287_143246584415520_1716313731926419018_n_ityg08.jpg",
  },

  {
    id: 3,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991885/142247695_434236184393778_6345146874288389574_n_xq6ezi.jpg",
  },

  {
    id: 4,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991881/136458579_2585282428442808_7629580466753870779_n_ewnwfh.jpg",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1614763599/at8klwzs7isfbjclxad7.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991889/169258136_288839436051680_2279812735427280178_n_zgmqb9.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991891/197544574_1449261498758331_5135196510100628557_n_uzzyjr.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991892/197842668_491308135627560_4301570587061505167_n_uh7tgd.jpg",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991892/197838561_861427271121690_7907241222042911369_n_kohkaz.jpg",
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991890/178906503_2717048695253060_7739369083892900055_n_pok17m.jpg",
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991888/163040121_2548584142102070_2173809055848402729_n_en1gvr.jpg",
  },
  {
    id: 12,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991885/137011330_123817946226612_5671219850416302656_n_cm0izl.jpg",
  },
  {
    id: 13,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991890/181741274_238949211316362_4772037031052832402_n_ynussj.jpg",
  },
  {
    id: 14,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991908/273007204_451868240012877_4012436389844627724_n_jazywr.jpg",
  },
  {
    id: 15,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991905/241974527_210466701068403_1543350620335693058_n_bguku9.jpg",
  },
  {
    id: 16,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991906/241975591_419310086286473_8632368543178923508_n_ljituu.jpg",
  },
  {
    id: 17,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991896/199439286_329016585384335_8683031351909849844_n_c8flmo.jpg",
  },
  {
    id: 18,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1657991895/198980757_211179054050003_6950718221162951236_n_en2jtg.jpg",
  },
];

export const pizzas: Products = [
  {
    id: 101,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/371891513_715359983673073_8371142120611572029_n_uy5fal.jpg",
  },
  {
    id: 100,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/376388774_811952363743830_6925793279405463663_n_qpxsdu.jpg",
  },
  {
    id: 99,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/375024418_749364236993896_4757534380252299844_n_py5pjz.jpg",
  },
  {
    id: 98,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187058/375613718_1844436772687937_6313302452016476943_n_i7a2mu.jpg",
  },
  {
    id: 97,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1694187059/371950376_3009407782524460_5556854442298344424_n_sz7mxp.jpg",
  },
  {
    id: 96,
    img: "https://res.cloudinary.com/dq2nawkx9/image/upload/v1692693325/368270031_727602119380262_3133457759484143262_n_zzquj8.jpg",
  },
];

export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
  img: "/temporary/p1.png",
  price: 24.9,
  options: [
    {
      title: "Small",
      additionalPrice: 0,
    },
    {
      title: "Medium",
      additionalPrice: 4,
    },
    {
      title: "Large",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
