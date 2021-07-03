<template>
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-12 fluid_fullwidth">
        <div class="frame-wrapper__video">
          <iframe
            width="560"
            height="315"
            :src="Urls.youtube.production"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6">
        <c-header-style-one>トークでの気づき・質問を発信しましょう！</c-header-style-one>
        <p>トーク視聴中の気づき・質問を下のフォームから発信しましょう！</p>
        <p>宛先（運営orスピーカーさん）と、内容を入力して送信をお願いします！</p>
        <div class="text-center reaction_form">
          <select name="example" class="reaction_yes" v-model="toYes">
            <option value="運営">運営へ</option>
            <option value="魚住さん">魚住さんへ</option>
            <option value="石井さん">石井さんへ</option>
            <option value="菱谷さん">菱谷さんへ</option>
            <option value="佐々木さん">佐々木さんへ</option>
            <option value="倉本さん">倉本さんへ</option>
          </select>
          <input class="reaction_yes" type="input" name="yes" v-model="contentYes" placeholder="〇〇という気づきが得られました。" />
          <button class="reaction_button color_infblue" v-on:click="submitYes()">送信</button>
        </div>
        <p class="invisible thanks" id="thanks">Thank you!</p>
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <c-header-style-one>スピーカーさんにリアクションを送ろう！</c-header-style-one>
          <p class="text-left">※youtubeLiveの仕様上3〜5秒遅延が発生します。そのためトーク中はオフにさせていただきます。</p>
          <div class="d-flex justify-content-around ">
            <button class="reaction_button color_infred" v-on:click="submitClap()">拍手</button>
            <button class="reaction_button color_infred" v-on:click="submitWhistle()">口笛</button>
            <button class="reaction_button color_infred" v-on:click="submitLaugh()">笑い声</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-8">
        <c-header-style-one color_infblue>Break1(14:50~)</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース番号、パスワードが書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※各zoomリンクにはパスワードがかけられています。前日のリマインドメールにパスワードがありますのでご確認の上ご参加ください。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth1" target="_blank" rel="noopener">ブース１に参加</c-button>
          <c-button class="reaction_button color_infred" :href="Urls.zoom.break1.booth2" target="_blank" rel="noopener">ブース２に参加</c-button>
        </div>
      </div>
      <div class="col-md-4">
        <div class="img__wrapper">
          <img src="watch/break1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-4 order-2 order-md-1">
        <div class="img__wrapper">
          <img src="watch/break2.png" alt="" />
        </div>
      </div>
      <div class="col-md-8 order-1 order-md-2">
        <c-header-style-one color_inforange>Break2(16:35~)</c-header-style-one>
        <p>
          事前にお申し込みいただいたブレイクはこちらからご参加ください！<br>
          前日のリマインドメールにご希望されたブース名、パスワードが書いてありますので、
          ご確認の上ご参加ください。
          聞き流しコンテンツをご希望された方は、このままお楽しみください。
        </p>
        <p>※各zoomリンクにはパスワードがかけられています。前日のリマインドメールにパスワードがありますのでご確認の上ご参加ください。</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break2.booth1" target="_blank" rel="noopener">ブース１に参加</c-button>
          <c-button class="reaction_button color_infblue" :href="Urls.zoom.break2.booth2" target="_blank" rel="noopener">ブース２に参加</c-button>
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-12">
        <c-header-style-one>参加予定のブレイク・パスワード情報</c-header-style-one>
      </div>
      <div class="col-md-6">
        <p>登録したメールアドレスを入力すると、</p>
        <ul>
          <li>参加予定のブレイク名</li>
          <li>参加型コンテンツの場合、ミーティングID、パスワード</li>
          <li>懇親会に参加するためのパスワード</li>
        </ul>
        <p>が表示されます。</p>
        <div class="text-center reaction_form">
          <input class="reaction_yes" type="input" name="yes" v-model="inputEmailAddress" placeholder="xxx@example.com" />
          <button class="reaction_button color_infblue" v-on:click="checkBreak()">検索</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="breakinfo">
          <p class="thanks" id="breakinfo_none"></p>
          <h5 class="subtitle">ブレイク１</h5>
          <p class="thanks" id="breakinfo_one"></p>
          <p class="thanks" id="breakinfo_one_pass"></p>
          <h5 class="subtitle">ブレイク２</h5>
          <p class="thanks" id="breakinfo_two"></p>
          <p class="thanks" id="breakinfo_two_pass"></p>
          <h5 class="subtitle">懇親会</h5>
          <p>ページ下部に懇親会へ移動するzoomリンクがございますので、表示されたパスワードを入力してお入りください。</p>
          <p id="breakinfo_party_warning">※懇親会は事前申し込みの方のみご案内しております。申し込みフォームでご登録したメールアドレスをご入力いただくと、懇親会に参加するためのパスワードが表示されます。</p>
          <p class="thanks" id="breakinfo_party"></p>
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-12">
        <c-header-style-one>スピーカーさんへの手紙の送信方法</c-header-style-one>
      </div>
      <div class="col-12 col-md-6">
        <div class="img__wrapper">
          <img src="tegami/tegami_1.jpg" alt="">
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="img__wrapper">
          <img src="tegami/tegami_2.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-12">
        <c-header-style-one color_infblue>懇親会(17:45~)</c-header-style-one>
        <p>zoomにて、スピーカーさん、参加者の方と交流ができます！イベントでの「あっ」をみんなに共有したり、聞いたりして楽しみましょう！</p>
        <div class="d-flex justify-content-around text-center py-md-5 py-2">
          <c-button class="reaction_button color_infred" :href="Urls.zoom.party" target="_blank" rel="noopener">懇親会に参加</c-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CButton from '~/components/modules/CButton'
import CHeaderStyleOne from '~/components/modules/header/CHeaderStyleOne'
import firebase from '~/plugins/firebase'
export default {
  components: {
    CButton,
    CHeaderStyleOne
  },
  data () {
    return {
      waitingLink: '/waiting/',
      chooseLink: '/chooseSeat/',
      watchLink: '/watch/',
      toYes: '運営',
      contentYes: '',
      yesList: [],
      inputEmailAddress: ''
    }
  },
  async asyncData ({ $axios }) {
    const requestUrl = 'https://raw.githubusercontent.com/TEDxNagoyaU/data-provider/main/data.json'
    const resultJson = await $axios.$get(requestUrl)
    const url = 'https://script.google.com/macros/s/AKfycbyqGOnDQepqkYUQF_1eI-8Yop1TsQbfD51cxjb0681BMpWCU0RoDK-4mZUAJgg-eNKB7w/exec'
    // リクエスト（Get）
    const response = await $axios.$get(url)
    // 配列で返ってくるのでJSONにして返却
    return {
      Urls: resultJson,
      result: response
    }
  },
  created () {
    this.db = firebase.firestore()
  },
  methods: {
    // DBにデータを送信する
    submitClap () {
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: true,
        isWhistle: false,
        isLaugh: false,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitWhistle () {
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: false,
        isWhistle: true,
        isLaugh: false,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitLaugh () {
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('action')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        isClap: false,
        isWhistle: false,
        isLaugh: true,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
    },
    submitYes () {
      // 先程作った「sample」というコレクションを取得する
      const collection = this.db.collection('yes')
      const timeStamp = Math.round((new Date()).getTime())
      // 「sample」というコレクションに対して {} で定義した情報を add する
      collection.add({
        to: this.toYes,
        content: this.contentYes,
        time: timeStamp
      }).then(function (docRef) {
        // 保存に成功した時
        console.log('Document written with ID: ', docRef.id)
        const thanks = document.getElementById('thanks')
        thanks.classList.remove('invisible')
        setTimeout(function () {
          thanks.classList.add('invisible')
        }, 4000)
      }).catch(function (error) {
        // 保存に失敗した時
        console.error('Error adding document: ', error)
      })
      this.contentYes = ''
    },
    getYes () {
      this.db.collection('yes').onSnapshot((docs) => {
        this.yesList = [] // リアルタイム反映のため一度リセット
        docs.forEach((doc) => {
          const yes = doc.data()
          yes.id = doc.id // 一意のドキュメントIDをプロパティに追加（後のupdateやdeleteでドキュメントIDが必要なため）
          this.yesList.push(yes)
        })
      })
      console.log(this.yesList)
    },
    checkBreak () {
      const inputEmail = this.inputEmailAddress
      const breakinfoNone = document.getElementById('breakinfo_none')
      const breakinfoOne = document.getElementById('breakinfo_one')
      const breakinfoOnePass = document.getElementById('breakinfo_one_pass')
      const breakinfoTwo = document.getElementById('breakinfo_two')
      const breakinfoTwoPass = document.getElementById('breakinfo_two_pass')
      const breakinfoParty = document.getElementById('breakinfo_party')
      const breakinfoPartyWarning = document.getElementById('breakinfo_party_warning')
      const result = this.result.filter(user => user.email === inputEmail)
      console.log(result.length)
      if (result.length === 0) {
        breakinfoNone.textContent = '登録情報が見つかりませんでした。メールアドレスにお間違いのない場合、運営にご連絡ください。また、ブレイクの変更がされていない場合、サイトを更新して再度お試しください。それでも変更されていない場合は運営にご連絡ください。'
        breakinfoOne.textContent = ''
        breakinfoOnePass.textContent = ''
        breakinfoTwo.textContent = ''
        breakinfoTwoPass.textContent = ''
        breakinfoParty.textContent = ''
        breakinfoPartyWarning.textContent = '※懇親会は事前申し込みの方のみご案内しております。申し込みフォームでご登録したメールアドレスをご入力いただくと、懇親会に参加するためのパスワードが表示されます。'
      } else {
        breakinfoNone.textContent = 'ブレイクの変更がされていない場合、サイトを更新して再度お試しください。それでも変更されていない場合は運営にご連絡ください。'
        let breakOnePass = ''
        let breakTwoPass = ''
        if (result[0].break1.includes('トーク後のスピーカーさんに質問！コーナー1')) {
          breakOnePass = this.Urls.zoom.break1.booth1_pass
        } else if (result[0].break1.includes('Inflationゲーム ～「あっ」という気づきを与え合おう～')) {
          breakOnePass = this.Urls.zoom.break1.booth2_pass
        }
        if (result[0].break2.includes('トーク後のスピーカーさんに質問！コーナー2')) {
          breakTwoPass = this.Urls.zoom.break2.booth1_pass
        } else if (result[0].break2.includes('「あっ」をシェアしてみよう！')) {
          breakTwoPass = this.Urls.zoom.break2.booth2_pass
        }
        breakinfoOne.textContent = result[0].break1
        breakinfoOnePass.textContent = breakOnePass
        breakinfoTwo.textContent = result[0].break2
        breakinfoTwoPass.textContent = breakTwoPass
        breakinfoParty.textContent = this.Urls.zoom.party_pass
        breakinfoPartyWarning.textContent = ''
      }
    }
  }
}
</script>

<style lang="scss">

.container-fluid {
}
.timeline{
  width: 100%;
  background-color: white;
  .tweet{
    border-bottom: 1px #303030 solid;
    padding: 15px;
    p{
      color: black;
      margin: 0;
    }
  }
}
.reaction_form{
  display: flex;
  justify-content: center;
  .reaction_yes{
    width: 100%;
  }
}
.reaction_button{
    display: inline-block;
    flex-basis: 30%;
    background-color: $inf-red;
    color: white;
    padding: 10px;
    border: none;
    font-size: 18px;
    &.color_infred{
      background: linear-gradient(to right, $inf-orange, $inf-red, $inf-orange);
      background-size: 200% auto;
      transition: all 1s ease;
      &:hover{
        background-position: right center;
      }
    }
    &.color_infblue{
      background: linear-gradient(to right, $inf-light-blue, lighten($inf-blue, 10%), $inf-light-blue);
      background-size: 200% auto;
      transition: all .5s ease;
      &:hover{
        background-position: right center;
      }
    }
}
.thanks{
  transition: visibility .5s ease;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.breakinfo{
  background: rgb(60, 60, 60);
  padding: 20px;
}
.subtitle {
  color: #FF8C00;
  background: -webkit-linear-gradient(0deg, $inf-light-blue, $inf-orange, $inf-red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 24px;
  font-weight: bold;
}

.links {
  padding-top: 15px;
}
</style>
