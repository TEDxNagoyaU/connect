<template>
  <div>
    <v-container-fluid>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
        >
          <v-section-faq-list
            id="faqs_before_event"
            list-header="ブレイク関係"
            :faqs="faqs_break"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <v-section-faq-list
            list-header="懇親会"
            :faqs="faqs_party"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <v-section-faq-list
            list-header="配信トラブル"
            :faqs="faqs_trouble"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <v-section-faq-list
            list-header="各リンクについて"
            :faqs="faqs_link"
          />
        </v-col>
        <!--
        <v-col
          cols="12"
        >
          <v-section-faq-list
            list-header="その他"
            :faqs="faqs_other"
          />
        </v-col>
        -->
      </v-row>
    </v-container-fluid>
  </div>
</template>

<script>
import VSectionFaqList from '~/components/VSectionFaqList.vue'

export default {
  components: {
    VSectionFaqList
  },
  data: () => ({
    faqs_break: [
      {
        question: '自分の参加するブレイクが分かりません。',
        answer: '昨日お送りしたリマインドメールに、〇〇さんが参加されるブレイクが書いてありますので、確認してみてください！メールが見当たらない場合はこちらで確認しますので、お名前を添えて、<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a>宛にメールまたは、LINE公式アカウントにてご連絡ください！'
      },
      {
        question: 'ブレイクは途中参加できますか？',
        answer: '聞き流しコンテンツ（youtubelive）の場合、いつでもご覧いただけます。参加型コンテンツ（zoom）の場合、申し訳ありませんが、途中参加・退出はできません。開始時間に間に合わない・終了時間まで残れない場合は、聞き流しコンテンツ（Youtube Live）への参加をよろしくお願いいたします。'
      }
    ],
    faqs_party: [
      {
        question: '懇親会申し込みしていないですが、今から参加することはできますか？（確認中。。。）',
        answer: 'コミュに確認中。。。'
      }
    ],
    faqs_trouble: [
      {
        question: 'リンクをタップしても飛べません。どうしたらいいですか？',
        answer: 'zoomのアプリを開いて、IDとパスコードを入力していただくか、リンクをコピーして、ブラウザの検索バーに張り付けて、ページを開いてみてください！それでもできない場合、通信状況が悪くなっている可能性があります。少し時間を置いてから再度お試しください。'
      },
      {
        question: '配信が途切れました。',
        answer: '運営側による問題の場合、LINE、メール等で通達させていただきます。'
      }
    ],
    faqs_link: [
      {
        question: 'どのリンクに入ればよいかわかりません。',
        answer: 'LINE、メール等でお送りいたしますので、お名前を添えてご連絡ください。'
      }
    ],
    faqs_other: [
      {
        question: '申し込みしたのに、メールが届かない',
        answer: '<a href="mailto:info@tedxnagoyau.com">info@tedxnagoyau.com</a>に件名を「申し込みメール不在」にして、「お名前」と「登録したメールアドレス」を添えて送信していただくようお願いいたします。'
      }
    ]
  })
}
</script>

<style>
.event-title{
  color: rgb(133, 24, 24);
  border-bottom: 1px solid rgb(184, 49, 49);
  line-height: 1.5;
}
.event-title span{
  border-bottom: 6px solid rgb(184, 49, 49);
}
</style>
