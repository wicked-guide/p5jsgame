Vue.component("sidemenu", {
  data() {
    return {
      links: [
        { name: "左右を一致", href: "index.html" },
        { name: "クローズアップ", href: "closeup-quiz.html" },
        { name: "ABテスト", href: "ab-test.html" },
        { name: "all-light", href: "all-light.html" },
        { name: "アーチェリー", href: "archery.html" },
        // { name: "ボール落下", href: "boll-fall.html" },
        // { name: "タメジャンプ", href: "charge-jump.html" },
        { name: "正解のみ選べ", href: "collect-the-correct.html" },
        // { name: "ホッピング", href: "hopping.html" },
        { name: "氷の床", href: "ice-slide.html" },
        // { name: "ジャンプタワー", href: "jump-tower.html" },
        { name: "24ピースパズル", href: "puzzle.html" },
        { name: "番降順にクリック", href: "tuch-the-number.html" },
      ],
    };
  },
  template: `
  <nav>
    <div v-for="link in links"><a :href="link.href">{{link.name}}</a></div>
  </nav>
    `,
});
