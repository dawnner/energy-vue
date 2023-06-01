<template>
  <div>
    <div style="display: flex;justify-content: center;">
      <web-map style="width: 1200px;height: 700px;"></web-map>
    </div>
    <div class="box-web">
      <!-- 上 -->
      <div class="box-web-top">
        <div class="web-top-conter">
          <div class="search">
            <div class="search-left">
              <span style=" width: 100%;height: 50%;font-size: 20px;color:#fff"
                >全站检索：</span
              >
              <span style=" width: 100%;height: 50%;font-size: 20px;color:#fff">
                双碳动态及公开资料
              </span>
            </div>
            <div class="searchframe">
              请输入企业名称 或 关键词
              <el-button
                style="height: 100%;position: absolute;right:0"
                type="warning"
                icon="el-icon-search"
                >搜索</el-button
              >
            </div>
          </div>
          <div class="run">
            <div class="hot-search">
              <i class="el-icon-s-marketing"></i
              ><span style="font-weight:700">热搜资讯</span>
            </div>
            <div class="slide">
              <marquee direction="left" loop="infinite" scrollLeft="0">
                <li>全国碳市场运行情况一览</li>
                <li>
                  生态环境部发布《全国碳排放权交易市场第一个履约周期报告》
                </li>
                <li>一图读懂《工业领域碳达峰实施方案》</li>
                <li>
                  全国首个碳资信评价体系试点在宁波启动，企业碳资信评价规范标准同步预发布
                </li>
              </marquee>
            </div>
          </div>
        </div>
      </div>
      <!-- 下 -->
      <div class="box-web-bottom">
        <div class="web-bottom-conter">
          <el-row :gutter="24">
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <el-tabs
                  ref="navTabs"
                  v-model="activeName"
                  type="card"
                  @tab-click="handleClick"
                >
                  <el-tab-pane label="工作通知" name="0">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a @click="jumpPage1(index)" class="textbt">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="投产运营">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students2"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a class="textbt" @click="jumpPage2(index)">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="改造升级">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students3"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a class="textbt" @click="jumpPage3(index)">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="绿色金融">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students4"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a class="textbt" @click="jumpPage4(index)">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="ESG">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students5"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a class="textbt" @click="jumpPage5(index)">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="招标公告">
                    <div
                      class="newspaper"
                      v-for="(item, index) in students6"
                      :key="index"
                    >
                      <div class="newspaper-img">
                        <img class="imgs-hober" :src="item.img" alt="" />
                      </div>
                      <div class="newspaper-text">
                        <a class="textbt" @click="jumpPage6(index)">
                          {{ item.textbt }}
                        </a>
                        <div class="textnew">
                          {{ item.text }}
                        </div>
                        <div class="timesj">{{ item.time }}</div>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-col>
            <el-col :span="8" style="height: 100%;">
              <div class="grid-content bg-purple" style="height: 100%;">
                <div class="right-box">
                  <div class="right-one">
                    <i class="el-icon-s-claim"></i>
                    <span>碳排放特征信息</span>
                  </div>
                  <div>
                    <div style="border-bottom: 1px dotted #ccc;display:flex;">
                      <img
                        src="../assets/webimg/xlsx.jpg"
                        alt=""
                        style="margin-right:10px"
                      />
                      <a href="" style="margin-top:10px;font-size:13px"
                        >华东-发电-纳入国家碳排放信息(02014).xls</a
                      >
                    </div>
                    <div style="border-bottom: 1px dotted #ccc;display:flex;">
                      <img
                        src="../assets/webimg/xlsx.jpg"
                        alt=""
                        style="margin-right:10px"
                      />
                      <a href="" style="margin-top:10px;font-size:13px"
                        >华东-发电-纳入企业单位变动(02014).xls</a
                      >
                    </div>
                  </div>
                  <div class="right-two">
                    <i class="el-icon-search"></i>
                    <a href="">探索更多绿碳企业</a>
                  </div>
                  <div class="right-three">
                    <div class="right-three01">
                      <a style="margin-bottom:10px;font-weight: 700;"
                        >山西潞光发电有限公司</a
                      >
                      <div class="three-new1">
                        <a
                          href=""
                          style="display: flex;align-items: center;width:103px;height:90px;overflow: hidden;margin-right:10px"
                        >
                          <img
                            class="new1-tupian"
                            src="../assets/webimg/Snipaste_1.jpg"
                            alt=""
                          />
                        </a>
                        <div style="font-size:13px;width:100%;color:#555555">
                          <div>
                            | 成立于2015年1月，位于山西省长治市长子县宋村乡
                          </div>
                          <div>| 控股股东为格盟国际能源有限公司</div>
                          <div
                            style="margin-top:10px;display:flex;justify-content: space-between;"
                          >
                            <span>2023-05-23</span
                            ><span><i class="el-icon-view"></i> 0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right-three01">
                      <a style="margin-bottom:10px;font-weight: 700;"
                        >大唐东营发电有限公司</a
                      >
                      <div class="three-new1">
                        <a
                          href=""
                          style="display: flex;align-items: center;width:103px;height:90px;overflow: hidden;margin-right:10px"
                        >
                          <img
                            class="new1-tupian"
                            src="../assets/webimg/Snipaste_2.png"
                            alt=""
                          />
                        </a>
                        <div style="font-size:13px;width:100%;color:#555555">
                          <div>
                            |
                            成立于2013年6月，位于山东省东营港经济开发区东港路以西海滨路以北
                          </div>
                          <div>| 控股股东为大唐山东发电有限公司</div>
                          <div
                            style="margin-top:10px;display:flex;justify-content: space-between;"
                          >
                            <span>2023-05-23</span
                            ><span><i class="el-icon-view"></i> 30</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right-three01">
                      <a style="margin-bottom:10px;font-weight: 700;"
                        >三河发电有限责任公司</a
                      >
                      <div class="three-new1">
                        <a
                          href=""
                          style="display: flex;align-items: center;width:103px;height:90px;overflow: hidden;margin-right:10px"
                        >
                          <img
                            class="new1-tupian"
                            src="../assets/webimg/Snipaste_3.png"
                            alt=""
                          />
                        </a>
                        <div style="font-size:13px;width:100%;color:#555555">
                          <div>
                            | 成立于1994年7月，位于河北省廊坊市三河市燕郊
                          </div>
                          <div>| 控股股东为神华国华国际电力股份有限公司</div>
                          <div
                            style="margin-top:10px;display:flex;justify-content: space-between;"
                          >
                            <span>2023-05-23</span
                            ><span><i class="el-icon-view"></i> 0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="right-three01">
                      <a style="margin-bottom:10px;font-weight: 700;"
                        >华能太仓发电有限责任公司</a
                      >
                      <div class="three-new1">
                        <a
                          href=""
                          style="display: flex;align-items: center;width:103px;height:90px;overflow: hidden;margin-right:10px"
                        >
                          <img
                            class="new1-tupian"
                            src="../assets/webimg/Snipaste_1.jpg"
                            alt=""
                          />
                        </a>
                        <div style="font-size:13px;width:100%;color:#555555">
                          <div>
                            | 成立于2004年6月，位于江苏省太仓市浮桥镇金浪浪港村
                          </div>
                          <div>
                            | 控股股东为华能国际电力江苏能源开发有限公司
                          </div>
                          <div
                            style="margin-top:10px;display:flex;justify-content: space-between;"
                          >
                            <span>2023-05-23</span
                            ><span><i class="el-icon-view"></i> 0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import webMap from "../views/WebMap/map.vue";
import DistanceTool from "bmaplib.distancetool";
export default {
  data() {
    return {
      activeName: "0",
      students: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "【本局动态】开展碳数据核查工作 帮扶企业降碳减排------杏花岭生态环境分局开展2022年度发电行业温室气体排放报告核查工作",
          text:
            "评标结果公示 一、项目名称：齐鲁分公司热电厂6号锅炉节能提效改造空气预热器更换 二、招标编号：WZ20220830-4801-11498-B1 三、评标情况 1、入围供应商基本情况 排名 投标人 投标报价 （万元） 评标价格 （万元） 质量 交货期 综合得分 备注 1 青州鑫晖热能科技有限公司 74.8480000 74.85 合格 满足要求 92.90 入围候选人 2 山东恒涛节能环保有限公司 76.5000000 76.50 合格 满足要求 88.97 入围候选人 2、入围供应商其它情况 排名 投标人 项目负责人 资格能力条件 1 青州鑫晖热能科技有限...",
          time: "2023-05-16"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "我省对2023年全国碳市场重点任务进行部署",
          text:
            "为全面落实全国碳市场政策，扎实完成第二个履约周期各项工作任务，4月26日，省生态环境厅组织召开落实全国碳市场政策2023年重点任务部署会暨碳核查启动会，安排布置2023年全国碳市场重点工作任务，启动2022年度碳排放核查工作。建设全国碳排放权交易市场，是推动绿色低碳发展的一项重大制度创新。会议传达了生态环境部推进全国碳市场建设最新工作进展及工作要求，解读全国碳市场建设背景、制度体系、工作要点及核查工作技术要点，布置2023年我省落实全国碳市场政策重点工作任务。要求各市局、各技术单位要进一步深刻认识碳核查工作对全国碳市场平稳有序运行的重要作用，切实加强组织领导，构建工作机制，提升专业能力，确保核查质量，努力完成全国碳市场第二个履约周期工作任务。",
          time: "2023-05-11"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "河北省生态环境厅到景县碳排放重点企业进行帮扶调研",
          text:
            "4月26日，河北省生态环境厅应对气候变化处刘英敏副处长、徐光仪主任，衡水市生态环境局副局长崔延斌、大气科科长张辉等领导到景县春源热力有限公司对我县碳排放重点企业进行帮扶调研。帮扶中通过听取汇报、查看现场等方式，对企业碳排放管理工作开展情况进行了详细了解。刘英敏副处长一行首先会议听取了企业碳排放报告核查机构关于核查工作进度的汇报，了解核查工作中存在的困难和问题。组织专家对核查工作中遇到的困难和问题进行了解答。同时对企业开展帮扶调研，切实了解企业在历年度碳排...",
          time: "2023-04-26"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "威海市生态环境局举办2023年全市碳排放数据质量管理培训班",
          text:
            "准确可靠的碳排放数据是全国碳市场有效规范运行的生命线，为进一步提升我市重点排放单位碳排放数据质量管理工作，4月19日，威海市生态环境局组织举办2023年全市碳排放数据质量管理培训班，邀请山东省生态环境规划研究院应对气候变化研究所专家史晓梅作专题培训。各分局碳排放工作负责同志、全市22家碳排放重点排放单位的36名碳排放数据管理责任人参加了培训。培训中，史晓梅结合多年的碳排放数据质量管理工作经验，为大家解读《企业温室气体排放核算与报告指南发电设施》，详细讲解了..",
          time: "2023-04-21"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "关于公布河北省第二批二氧化碳捕集利用与封存试点项目的通知",
          text:
            "来源；河北省生态环境厅；正文：各市（含定州、辛集市）人民政府，雄安新区管委会，省有关部门：为深入贯彻党中央、国务院关于碳达峰碳中和的重大战略决策...",
          time: "2023-03-31"
        }
      ],
      students2: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "中阳钢铁热电厂顺利完成2022年度碳核查",
          text:
            "日前，由省生态环境厅委托的第三方核查机构——中国国检测试控股集团股份有限公司和山西云平台环保管家发展有限公司，联合对中阳钢铁热电厂2022年度碳排放进行现场核查。在首次会议上，双方就核查期间的工作需求、配合事项作了表态发言。图片核查过程中，核查组通过文件资料审查、现场走访、数据交叉比对等方式，对热电厂提交的碳排放报告和相关数据，收集汇总、详细核查，以此来判断数据质量控制计划的符合性，企业温室气体排放报告的真实可靠性。核查结束后，双方就存在问题进行了深入地交流和探讨。中阳钢铁表态，会继续深入贯彻落实国家的碳达峰碳中和目标任务，积极整改存在问题，扎实推进碳排放管理工作，为实现“双碳”目标勇担企业责任、履行企业担当。",
          time: "2023-05-17"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "公司圆满完成2022年度碳排放现场核查工作",
          text:
            "2023年5月10日至5月12日省环保局委派第三方中国船级社质量认证公司对我公司2022年度碳排放现场核查。该公司领导高度重视，精心筹划，由环保部牵头，指定专人负责相关工作的准备和实施，公司第三方零碳能源科技（山东）有限公司、县环保局相关人员共同陪同核查工作。",
          time: "2023-05-16"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "山西省能源局领导莅临我司同华电厂余热利用项目现场",
          text:
            "5月11日，山西省能源局一级巡视员胡万升及副市长李文杰、张玮华及相关单位主要负责人，在同华电厂相关领导的陪同下莅临我司晋控电力同华山西发电有限公司2×660MW机组余热利用供热改造工程项目现场开展调研视察工作。调研组一行深入晋控电力同华发电公司汽机厂房，实地察看我司正在进行的一号机组中排连通管道改造现场，副市长张玮华汇报了同华电厂余热利用长输供热项目整体工作进度。",
          time: "2023-05-15"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "开滦集团协鑫发电公司顺利完成2022年度碳排放核查工作",
          text:
            "近日,河北省生态环境厅碳排放核查组到开滦协鑫发电公司开展为期两天的“2022年度碳排放现场核查”工作，该公司相关部门专业专工配合此次核查工作。碳排放管理是企业节能减排和绿色低碳发展的基础工作，为顺利高效地通过此次核查工作，开滦集团协鑫发电公司安健环部率领碳排放核查迎检小组，组织碳排放咨询服务机构全面盘点2022年度碳排放数据、自查自纠数据源与证据源，深入研讨新指南与新配额分配方法,严格按照河北省生态环境厅的要求准备核查材料。",
          time: "2023-05-08"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "隆尧天唯热电有限公司污泥掺烧项目环境影响评价公众参与第二次信息公示",
          text:
            "一、项目概况：隆尧天唯热电有限公司污泥掺烧项目，位于河北邢台高新技术产业开发区，隆尧天唯热电有限公司现有厂区内，无新增用地。在现有封闭煤场内建设一座密闭污泥仓及相应废气处理措施。依托现有3台煤粉锅炉掺烧污泥，污泥含水率小于30%，为一般固废，掺烧比例5%~8%，年掺烧污泥2万吨，可减少燃煤用量6913吨/年，发电及供热能力不变。",
          time: "2023-05-06"
        }
      ],
      students3: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "我司中标电厂锅炉烟气CCUS项目",
          text:
            "近日，我司中标信发集团聊城信源集团有限公司郝集电厂锅炉烟气CCUS年产30万吨碳氮联产项目预处理和精馏塔罐体项目。作为国内知名非电行业烟气治理综合服务商，我司积极布局低碳业务领域，开展降碳技术攻关，推进碳捕集与资源化利用。此前，我司已签订唐山燕南水泥有限公司水泥窑尾气捕集提纯食品级CO2（干冰）环保科技项目，本次中标热电行业CCUS项目标志着公司在碳捕集与利用业务领域拓展取得新突破，有助于公司丰富项目经验及技术数据、提升减污降碳领域的品牌影响力和竞争力。",
          time: "2023-05-18"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "协会完成《火电机组储能调频技术开发与应用》技术成果鉴定会",
          text:
            "5月19日，山东省电力行业协会通过视频会议的方式召开了由大唐临清热电有限公司完成的“火电机组储能调频技术开发与应用”技术成果鉴定会。本次会议由山东省电力行业协会组织召开，会议邀请了青岛大学、山东大学、西安交通大学、大唐集团科研院、华电电科院山东分院等相关专家组成鉴定委员会。",
          time: "2023-05-16"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "交付 | 柳林森泽上线全应热电云，将能源数字化智能化落到实处",
          text:
            "日前，山西省柳林县森泽煤铝有限责任公司（以下简称“柳林森泽”）完成全应热电云系统的上线运行，以数字化智能化的方式提升生产效率，综合生产能效提高达2.67%。将数字技术与能源产业发展深度融合，有效提升能源数字化智能化发展水平，促进能源数字经济和绿色低碳循环经济发展，不仅是国家的重大发展政策，更是众多能源企业高质量发展的迫切需求。",
          time: "2023-05-8"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "投资15亿元！淄博这里将打造虚拟电厂",
          text:
            "4月27日下午，“智慧新能源 零碳绿色产业园区建设”战略合作签约仪式举行，该项目由淄博市物流与供应链协会对接支持，淄博热电集团、国电投贵州金元智慧能源以及淄博淄物管理咨询有限公司签订战略合作协议，共同投资15亿元，携手建设智慧新能源，打造零碳纯绿电产业园区和虚拟电厂，为淄博市新能源转型贡献力量，助力“3060”和“双碳”目标实现。",
          time: "2023-05-08"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "煤电“三改”进行时|西电公司6号机组电负荷深调至180MW",
          text:
            "按照建投能源“三改工作”的整体要求，西电公司在“十四五”期间进行灵活性改造、供热改造及节能改造（以下简称“三改”）工作，开展机组供热性能及出力诊断试验、纯凝工况下调峰试验及纯凝工况能耗试验，近日，西电公司电负荷居于中位，6号机组三改摸底试验趁势进行。在未投油、未投运等离子助燃的条件下，深度调峰电负荷达到前所未及的183.4MW，有效提高了机组的上网竞争力和盈利能力。",
          time: "2023-04-24"
        }
      ],
      students4: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "【公司动态】碳排放权抵质押债绿色金融贷款指导组到鲁泰热电指导工作",
          text:
            "5月8日，济宁市生态环境局鱼台县分局联合中国人民银行鱼台县支行、山东鱼台农村商业银行股份有限公司到鲁泰热电就碳排放权抵质押债绿色金融贷款业务进行座谈指导。座谈会上，指导组对鲁泰热电第二周期碳排放履约工作及碳排放核查工作进行安排部署，并就下步绿色金融贷款方向提出意见建议。李继鹏对济宁市生态环境局鱼台县分局、中国人民银行鱼台县支行、山东鱼台农村商业银行股份有限公司到热电公司开展交流活动表示欢迎，双方技术人员分别结合企业实际情况就下步合作方向进行深入探讨。",
          time: "2023-05-10"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "中国工商银行晋中分行成功发放首笔煤电保供贷款",
          text:
            "煤电保供是2022年冬季至2023年春季我国能源保供领域的重点工作。2022年国家发改委、人民银行根据国务院保暖保供会议精神联合召开专题会议，部署金融支持煤电企业安全保供工作，要求加大对煤电企业金融支持力度，采取有力举措纾解企业实际困难。总行下发了经发改委筛选的重点保供企业名单，名单内包含晋中市辖内重点保供企业山西瑞光热电有限责任公司。工商银行晋中分行根据上级行关于加快煤电保供贷款投放工作力度要求，积极与企业对接，经过多次沟通协调，克服种种困难，在3月底前成功发...",
          time: "2023-04-03"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "建行聊城电厂支行发放首笔煤炭清洁高效利用再贷款",
          text:
            "为落实人民银行关于煤炭清洁高效利用申报工作的要求，近日，中国建设银行聊城分行电厂支行成功为华能聊城热电有限公司投放煤炭清洁高效利用再贷款1亿元。华能聊城热电有限公司是聊城城区供暖的骨干企业，也是发改委确定的能源保供重点企业。进入供热供电高峰期后，企业储存煤炭资金压力较大，建行适时投放1亿元贷款。",
          time: "2023-03-24"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "烟台市首笔碳排放权质押融资业务落地中国光大银行烟台分行",
          text:
            "今年2月，以全国碳排放权交易市场为平台，中国光大银行烟台分行依托总行“碳易通”金融场景，成功为莱阳市热电有限公司办理烟台市首笔碳排放权质押融资业务，支持企业在服务民生、产能提升中实现绿色低碳转型发展。莱阳市热电有限公司是莱阳地区重点供热企业，供热区域覆盖莱阳市一半的区域，为当地民生行业重点企业。",
          time: "2023-03-23"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "关于公开征求《山东省碳金融发展三年行动方案（2023-2025）（征求意见稿）》意见的通知",
          text:
            "为深入贯彻党中央、国务院关于碳达峰碳中和重大战略决策，加快推进绿色低碳高质量发展先行区建设，构建助力经济社会全面绿色低碳转型的金融服务体系，起草了《山东省碳金融发展三年行动方案（2023-2025）（征求意见稿）》，在前期征求有关部门单位和地市意见的基础上，现向社会公开征求意见。 此次公开征求意见的时间为2023年2月10日-2月17日，欢迎有关单位和个人提出意见建议。",
          time: "2023-02-10"
        }
      ],
      students5: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "600219 南山铝业：山东南山铝业股份有限公司2022年度环境、社会及管治报告（中文版）",
          text: "来源：上海证券交易所",
          time: "2023-04-29"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "601058 赛轮轮胎：赛轮集团股份有限公司2022年度环境、社会及公司治理（ESG）报告",
          text: "来源：上海证券交易所",
          time: "2023-04-29"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "000488 晨鸣纸业 2022年社会责任报告",
          text: "来源：深圳证券交易所",
          time: "2023-04-29"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "000579.HK 北京京能清洁能源电力股份有限公司2022年环境、社会及治理报告",
          text: "来源：东方财富网",
          time: "2023-04-27"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt: "600578 京能电力：京能电力：2022年度社会责任报告",
          text: "来源：上海证券交易所",
          time: "2023-04-27"
        }
      ],
      students6: [
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "中国石油化工股份有限公司齐鲁分公司齐鲁分公司热电厂6号锅炉节能提效改造空气预热器评标结果公示",
          text:
            "评标结果公示 一、项目名称：齐鲁分公司热电厂6号锅炉节能提效改造空气预热器更换 二、招标编号：WZ20220830-4801-11498-B1 三、评标情况 1、入围供应商基本情况 排名 投标人 投标报价 （万元） 评标价格 （万元） 质量 交货期 综合得分 备注 1 青州鑫晖热能科技有限公司 74.8480000 74.85 合格 满足要求 92.90 入围候选人 2 山东恒涛节能环保有限公司 76.5000000 76.50 合格 满足要求 88.97 入围候选人 2、入围供应商其它情况 排名 投标人 项目负责人 资格能力条件 1 青州鑫晖热能科技有限...",
          time: "2023-05-26"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "国电电力三河公司1号机组深调峰给水系统改造及控制、燃烧系统优化工程公开招标项目招标公告",
          text:
            "第一章 公开招标 1.招标条件 本招标项目名称为：国电电力三河公司1号机组深调峰给水系统改造及控制、燃烧系统优化工程公开招标，项目招标编号为：CEZB230004124，招标人为三河发电有限责任公司，项目单位为：三河发电有限责任公司，资金来源为自筹。招标代理机构为国家能源集团国际工程咨询有限公司。本项目已具备招标条件，现对该项目进行国内资格后审公开招标。 ",
          time: "2023-05-23"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "【超(超)临界机组锅炉智慧燃烧优化专家系统技术科技服务项目-2023年6月山东公司大唐东营发电有限公司】招标公告",
          text:
            "（招标编号：CWEME-SHSD-202306FW-01）1. 招标条件本招标项目超（超）临界机组锅炉智慧燃烧优化专家系统技术科技服务项目，隶属大唐东营发电有限公司智慧化电厂建设范畴，已由大唐山东发电有限公司批准，资金来自企业自筹，招标人为大唐东营发电有限公司。项目已具备招标条件，现对该项目进行公开招标。",
          time: "2023-05-23"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "山西潞光发电有限公司#1、#2机组供热增容改造项目勘察和设计招标公告",
          text:
            "(招标编号：GMZB-2023-05-023) 招标项目所在地区：山西省·长治市·长子县 一、招标条件 本山西潞光发电有限公司#1、#2机组供热增容改造工程勘察和设计项目(招标项目编号: A1400000007001718021)，项目资金来源为企业自筹,招标人为山西潞光发电有限公司。本项目已具备招标条件，现进行公开招标。",
          time: "2023-05-23"
        },
        {
          img: require("../assets/webimg/websh.jpg"),
          textbt:
            "河北公司国能沧东电厂#4机组汽轮机高压缸节能改造项目单一来源采购结果公告",
          text:
            "（采购编号 WZCX-WZDY-2023040057） 一、成交供应商： 哈尔滨汽轮机厂有限责任公司 二、公告期： 2023-05-23 至 2023-05-26 三、采购人： 国能河北沧东发电有限责任公司 四、采购机构： 国能诚信招标有限公司 五、监督： 采购机构负责受理采购异议；采购人采购管理部门负责受理采购投诉。 异议接收单位：国能诚信招标有限公司",
          time: "2023-05-23"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    jumpPage1(index) {
      this.$router.push({
        path: `/web${index}`
      });
    },
    jumpPage2(index) {
      this.$router.push({
        path: `/webtwo${index}`
      });
    },
    jumpPage3(index) {
      this.$router.push({
        path: `/webthree${index}`
      });
    },
    jumpPage4(index) {
      this.$router.push({
        path: `/webfour${index}`
      });
    },
    jumpPage5(index) {
      this.$router.push({
        path: `/webfive${index}`
      });
    },
    jumpPage6(index) {
      this.$router.push({
        path: `/websix${index}`
      });
    }
  },
  components: {
    webMap
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.navTabs.$refs.nav.$nextTick(() => {
        // 此时tab的nav才渲染dom 否则拿不到el-tabs__item
        let target = document.getElementsByClassName("el-tabs__item");
        let that = this;
        for (let i = 0; i < target.length; i++) {
          target[i].addEventListener("mouseover", () => {
            that.$refs.navTabs.handleTabClick(1, String(i));
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.box-web {
  width: 100%;
  height: 100%;
}
.box-web-top {
  width: 100%;
  height: 140px;
  background: linear-gradient(#008080, #40a0a0);
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.web-top-conter {
  width: 1200px;
  height: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.search {
  display: flex;
  align-items: center;
  height: 62px;
  width: 100%;
}
.search-left {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
}
.searchframe {
  width: 580px;
  height: 40px;
  position: relative;
  line-height: 40px;
  background-color: #fff;
  border-radius: 5px;
  color: #d9d9d9;
  font-size: 12px;
  padding-left: 10px;
}
.run {
  height: 20px;
  width: 100%;
  display: flex;
}
.hot-search {
  width: 100px;
  color: #fc9804;
}
.slide {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
li {
  float: left;
  padding-left: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
}
.box-web-bottom {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.web-bottom-conter {
  width: 1200px;
  height: 100%;
}
div /deep/.el-tabs--card > .el-tabs__header {
  border-bottom: 2px solid #ffc014;
}
div /deep/.is-active {
  color: #fff;
  background-color: #008080;
}
.newspaper {
  width: 100%;
  display: flex;
  padding: 0px 0px 10px;
}
.newspaper-img {
  width: 24%;
  margin-right: 10px;
  overflow: hidden; /*这个属性是关键*/
}
.imgs-hober {
  transition: all 0.5s ease 0.1s;
}
.imgs-hober:hover {
  transform: scale(1.1);
}
.newspaper-text {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.textbt {
  display: block;
  width: 100%;
  font-size: 20px;
  color: #070707;
  font-weight: 700;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.textnew {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-size: 14px;
  color: #b1b0b0;
}
.timesj {
  color: #b1b0b0;
}
.right-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right-one {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #fcda53;
  font-weight: 700;
}
.right-two {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  color: #3c7939;
}
.right-three {
  width: 100%;
  height: 100%;
}
.right-three01 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  margin-bottom: 25px;
}
.three-new1 {
  display: flex;
  width: 100%;
  padding-right: 10px;
}
a:hover {
  text-decoration: underline;
}
.new1-tupian {
  width: 100%;
  transition: all 0.5s ease 0.1s;
}
.new1-tupian:hover {
  transform: scale(1.1);
}
</style>
