<template>
  <vue-form
    :schema="schema"
    :definition="definition"
    :model="model"
  >
    <div class="form-group form-action">
      <div class="col-sm-offset-2 col-sm-10">
        <button type="button" class="btn btn-primary" @click="submit">提交</button>
        <button type="button" @click="onSetModel">设置值</button>
      </div>
    </div>
  </vue-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        title: "统一头部导航",
        required: [
          "list"
        ],
        properties: {
          list: {
            $id: "#/properties/list",
            type: "array",
            title: "导航列表",
            items: {
              $id: "#/properties/list/items",
              type: "object",
              title: "一级导航",
              required: [
                "name",
                "key",
                "sub"
              ],
              properties: {
                name: {
                  $id: "#/properties/list/items/properties/name",
                  type: "string",
                  title: "名称"
                },
                url: {
                  $id: "#/properties/list/items/properties/url",
                  type: "string",
                  title: "链接（有二级导航不填）"
                },
                key: {
                  $id: "#/properties/list/items/properties/key",
                  type: "string",
                  title: "key"
                },
                sub: {
                  $id: "#/properties/list/items/properties/sub",
                  type: "array",
                  title: "二级导航列表（没有就不填）",
                  items: {
                    $id: "#/properties/list/items/properties/sub/items",
                    type: "object",
                    title: "",
                    required: [
                      "name",
                      "url",
                      "className"
                    ],
                    properties: {
                      name: {
                        $id: "#/properties/list/items/properties/sub/items/properties/name",
                        type: "string",
                        title: "名称"
                      },
                      url: {
                        $id: "#/properties/list/items/properties/sub/items/properties/url",
                        type: "string",
                        title: "链接"
                      },
                      className: {
                        $id: "#/properties/list/items/properties/sub/items/properties/className",
                        type: "string",
                        title: "icon className"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      definition: [
        {
          key: [
            "list"
          ],
          type: "array",
          items: [
            {
              key: [
                "list",
                "$index"
              ],
              type: "v-fieldset",
              items: [
                "*"
              ]
            }
          ]
        }
      ],
      model: {}
    }
  },
  computed: {
    ...mapState({
      data: state => state.model,
      valid: state => state.valid
    }),
  },
  methods: {
    submit () {
      console.log(this.data)
      this.validate()

      if (this.valid) {
        console.log('submit form !')
      }
    },
    onSetModel () {
      this.setModel({
        list: [{
          name: "我的账户",
          key: "my",
          sub: [{
            name: "我的信息",
            url: "/userinfo/myInfo.html",
            className: "tj-icon tj-icon-personal"
          },{
            name: "我的订单",
            url: "/userinfo/myOrder.html",
            className: "tj-icon tj-icon-myorder"
          }],
          showbar: false
        },
        {
          name: "增值服务",
          key: "addon",
          sub: [{
            name: "预付费行李",
            url: "http://www.tianjin-air.com/am-provider/reservation/baggage.html",
            className: "tj-icon tj-icon-b-luggage-copy"
          },
          {
            name: "机上餐食",
            url: "http://www.tianjin-air.com/am-provider/reservation/products.html",
            className: "tj-icon tj-icon-Foodorder"
          },{
            name: "辅营订单",
            url: "http://www.tianjin-air.com/am-provider/reservation/orderlist.html",
            className: "tj-icon tj-icon-meals"
          }],
          showbar: false
        },
        {
          name: "旅行须知",
          key: "help",
          sub: [{
            name: "购票须知",
            url: "/travelhelp/index.html?list=aboutBuyTicket",
            className: "tj-icon tj-icon-Noticeticket"
          },
          {
            name: "值机须知",
            url: "/travelhelp/index.html?list=checkinCatalogue",
            className: "tj-icon tj-icon-Notice2"
          },
          {
            name: "特殊旅客出行提示",
            url: "/travelhelp/index.html?list=specialGuest",
            className: "tj-icon tj-icon-Specialpassenger"
          },
          {
            name: "行李运输服务",
            url: "/travelhelp/index.html?list=luggageTransport",
            className: "tj-icon tj-icon-b-luggage-copy"
          },
          {
            name: "旅客携带危险品规定",
            url: "/travelhelp/index.html?list=dangGoodsTrans",
            className: "tj-icon tj-icon-Dangerousgoods"
          }],
          showbar: false
        },
        {
          name: "自助服务",
          key: "self-service",
          sub: [{
            name: "网上值机",
            url: "/selfservice/checkinQuery.html",
            className: "tj-icon tj-icon-Onlinecheck-in-copy"
          },
          {
            name: "航班动态",
            url: "/selfservice/flightstatus.html",
            className: "tj-icon tj-icon-dynamics"
          },
          {
            name: "客票验真",
            url: "http://www.travelsky.com/tsky/validate.jsp",
            className: "tj-icon tj-icon-verificationticket",
            target: "_blank"
          },
          {
            name: "自助改期",
            url: "/selfservice/irregularFlightChange.html",
            className: "tj-icon tj-icon-changethedate"
          },
          {
            name: "不正常航班证明",
            url: "/selfservice/irregularFlightProve.html",
            className: "tj-icon tj-icon-b-irregularflight-copy"
          },
          {
            name: "电子发票开具",
            url: "http://www.tianjin-air.com/am-bill/reservation/orderlist.html",
            className: "tj-icon tj-icon-fapiaodengji-copy-copy"
          }],
          showbar: false
        },
        {
          name: "优惠专区",
          key: "discount",
          sub: [{
            name: "套票专区",
            url: "/activity/20180504004.html",
            className: "tj-icon tj-icon-tickets"
          },
          {
            name: "优惠推荐",
            url: "/activity/20180628001.html",
            className: "tj-icon tj-icon-recommendation"
          },
          {
            name: "积分商城",
            url: "http://www.wepoints.com.cn/index.html",
            className: "tj-icon tj-icon-Integralmall",
            target: "_blank"
          }],
          showbar: false
        },
        {
          name: "首  页",
          key: "home",
          url: "/",
          sub: [],
          showbar: false
        }]
      })
    },
    ...mapMutations([
      'validate',
      'setModel'
    ])
  }
}
</script>
