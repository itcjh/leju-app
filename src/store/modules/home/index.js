const moduleA = {
    namespaced: true,
    state: {
        bannerImgs: [{
                img: require("@/assets/imgs/home/banner1.png"),
                id: 1,
            },
            {
                img: require("@/assets/imgs/home/banner2.png"),
                id: 2
            }
        ],
        categoryImgs: [{
                img: require("@/assets/imgs/home/sofa.png"),
                id: 3,
                text: "沙发系列",
                elText: "by Adrianne"
            },
            {
                img: require("@/assets/imgs/home/chair.png"),
                id: 4,
                text: "木质系列",
                elText: "by Hanna"
            },
            {
                img: require("@/assets/imgs/home/creative.png"),
                id: 5,
                text: "创意系列",
                elText: "by adais"
            }
        ],
        featureImgs: [{
                img: require("@/assets/imgs/home/chair-1.png"),
                id: 6,
                title: "现代极简吊灯",
                elText: "by Adrianne Ho",
                text: "切割平整圆滑，运用漫反…"
            },
            {
                img: require("@/assets/imgs/home/chair-2.png"),
                id: 7,
                title: "现代极简吊灯",
                elText: "by Adrianne Ho",
                text: "切割平整圆滑，运用漫反…"
            },
            {
                img: require("@/assets/imgs/home/chair-3.png"),
                id: 8,
                title: "现代极简吊灯",
                elText: "by Adrianne Ho",
                text: "切割平整圆滑，运用漫反…"
            },
        ]
    }
}
export default moduleA