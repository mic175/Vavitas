// Localized content for the formal policy pages.
// Kept here (instead of i18n dicts) because the copy is long-form and
// page-specific. Compliance: no disease-treatment claims, no public
// discount codes, conservative supplement language.

import type { Language } from "@/i18n/RegionContext";

export interface SectionTable {
  headers: string[];
  rows: string[][];
}

export interface Section {
  heading: string;
  body: string[];
  table?: SectionTable;
  bodyAfter?: string[];
}

export interface PageCopy {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  footnote?: string;
}

type LangMap = Record<Language, PageCopy>;

export const shippingCopy: LangMap = {
  en: {
    eyebrow: "Customer Care",
    title: "Shipping Policy",
    intro:
      "VAVITAS is committed to delivering your dietary supplements with care, transparency, and reliable customer support. Shipping options, delivery estimates, free-shipping eligibility, and final shipping charges are confirmed at checkout.",
    sections: [
      {
        heading: "Domestic Shipping",
        body: [
          "We offer shipping within the United States. Free standard shipping within the United States may be available on eligible orders where indicated at checkout.",
          "Orders are typically processed within 1–3 business days. Delivery times vary by destination, carrier availability, order processing, weather, and other circumstances outside VAVITAS's reasonable control.",
        ],
      },
      {
        heading: "International Shipping",
        body: [
          "International shipping may be available to select countries and regions, subject to shipping destination, product eligibility, local regulations, customs clearance, carrier availability, and applicable Shopify Market conditions.",
          "International customers are responsible for any customs duties, import taxes, brokerage fees, or local compliance requirements that may apply in the destination country, unless otherwise stated at checkout or required by applicable law.",
        ],
      },
      {
        heading: "Shipping Rates & Free Shipping Thresholds",
        body: [
          "Shipping rates and free-shipping thresholds vary by destination and are displayed in the active market currency at checkout. Final shipping eligibility and charges are determined at checkout.",
        ],
        table: {
          headers: ["Market / Destination", "Free Shipping Threshold", "Shipping Fee Below Threshold"],
          rows: [
            ["United States", "Eligible orders where indicated at checkout", "Calculated at checkout"],
            ["China", "Orders equivalent to US$300 or more", "Equivalent to US$45"],
            ["Singapore", "Orders equivalent to US$300 or more", "Equivalent to US$45"],
            ["Hong Kong", "Orders equivalent to US$300 or more", "Equivalent to US$45"],
            ["Canada", "Orders equivalent to US$150 or more", "Equivalent to US$20"],
          ],
        },
        bodyAfter: [
          "Local-currency amounts are automatically converted based on the active Shopify Market currency and may change as exchange rates are updated. Promotional offers, product eligibility, carrier availability, customs restrictions, or Shopify Market settings may affect shipping availability and final charges.",
        ],
      },
      {
        heading: "Shipping Address Accuracy",
        body: [
          "Customers are responsible for entering complete and accurate shipping information at checkout. Address changes cannot be guaranteed after an order has been placed.",
          "Orders may be delayed, returned, or subject to additional charges if the shipping address is incomplete, inaccurate, or undeliverable.",
        ],
      },
      {
        heading: "Delivery Timing",
        body: [
          "Estimated delivery times are provided as guidance only. Delivery estimates are not guaranteed and may be affected by order processing, carrier delays, weather, customs processing, regulatory review, or other circumstances outside VAVITAS's reasonable control.",
          "Shipping availability, delivery estimates, free-shipping eligibility, and final shipping charges are determined at checkout.",
        ],
      },
      {
        heading: "Need Help?",
        body: [
          "For shipping questions, please contact our support team at info@vavitas-health.com with your order number and shipping details.",
        ],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "客户服务",
    title: "配送政策",
    intro:
      "VAVITAS 致力于以专业、透明、可靠的客户支持，将您的膳食补充剂安全送达。配送方式、预计送达时间、免运费资格及最终运费均以结账页面确认为准。",
    sections: [
      {
        heading: "美国境内配送",
        body: [
          "我们为美国境内客户提供配送服务。符合条件的订单可在结账页面显示时享受美国境内标准免运费。",
          "订单通常会在 1–3 个工作日内处理。实际送达时间因目的地、承运商可用性、订单处理、天气及其他超出 VAVITAS 合理控制范围的情况而异。",
        ],
      },
      {
        heading: "国际配送",
        body: [
          "我们可向部分国家和地区提供国际配送服务，具体取决于收货目的地、产品配送资格、当地法规、清关情况、承运商可用性及适用的 Shopify Market 规则。",
          "除结账页面另有说明或适用法律另有规定外，国际订单的关税、进口税、清关代理费及其他当地合规要求由客户自行承担。",
        ],
      },
      {
        heading: "运费标准与免运费门槛",
        body: [
          "不同目的地的运费和免运费门槛可能不同，并会在结账时以当前市场货币显示。最终免运费资格和运费金额以结账页面为准。",
        ],
        table: {
          headers: ["市场／目的地", "免运费门槛", "未满门槛的运费"],
          rows: [
            ["美国", "符合条件的订单，以结账页面显示为准", "以结账页面计算为准"],
            ["中国", "等值 US$300 或以上", "等值 US$45"],
            ["新加坡", "等值 US$300 或以上", "等值 US$45"],
            ["香港", "等值 US$300 或以上", "等值 US$45"],
            ["加拿大", "等值 US$150 或以上", "等值 US$20"],
          ],
        },
        bodyAfter: [
          "本地货币金额会根据当前 Shopify Market 货币自动换算，并可能随汇率更新而变化。促销活动、产品资格、承运商服务范围、海关限制或 Shopify Market 设置，都可能影响配送可用性和最终运费。",
        ],
      },
      {
        heading: "收货地址准确性",
        body: [
          "客户须在结账时填写完整且准确的收货地址。订单提交后，地址修改无法得到保证。",
          "如果配送地址不完整、不准确或无法投递，订单可能会延迟、退回或产生额外费用。",
        ],
      },
      {
        heading: "送达时效",
        body: [
          "页面所示送达时间仅供参考。预计送达时间不构成保证，并可能受订单处理、承运商延误、天气、海关处理、监管审查或其他超出 VAVITAS 合理控制范围的情况影响。",
          "配送范围、预计送达时间、免运费资格及最终运费均以结账页面确认为准。",
        ],
      },
      {
        heading: "需要协助？",
        body: ["如对配送有任何疑问，请通过 info@vavitas-health.com 联系我们的支持团队，并提供订单号及配送信息。"],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "客戶服務",
    title: "配送政策",
    intro:
      "VAVITAS 致力於以專業、透明、可靠的客戶支援，將您的膳食補充品安全送達。配送方式、預計送達時間、免運費資格及最終運費均以結帳頁面確認為準。",
    sections: [
      {
        heading: "美國境內配送",
        body: [
          "我們為美國境內客戶提供配送服務。符合條件的訂單可在結帳頁面顯示時享有美國境內標準免運費。",
          "訂單通常會在 1–3 個工作天內處理。實際送達時間依目的地、承運商可用性、訂單處理、天候及其他超出 VAVITAS 合理控制範圍的情況而異。",
        ],
      },
      {
        heading: "國際配送",
        body: [
          "我們可向部分國家及地區提供國際配送服務，具體視收貨目的地、產品配送資格、當地法規、清關情況、承運商可用性及適用的 Shopify Market 規則而定。",
          "除結帳頁面另有說明或適用法律另有規定外，國際訂單的關稅、進口稅、清關代理費及其他當地合規要求由客戶自行承擔。",
        ],
      },
      {
        heading: "運費標準與免運費門檻",
        body: [
          "不同目的地的運費與免運費門檻可能不同，並會在結帳時以目前市場貨幣顯示。最終免運費資格與運費金額以結帳頁面為準。",
        ],
        table: {
          headers: ["市場／目的地", "免運費門檻", "未滿門檻的運費"],
          rows: [
            ["美國", "符合條件的訂單，以結帳頁面顯示為準", "以結帳頁面計算為準"],
            ["中國", "等值 US$300 或以上", "等值 US$45"],
            ["新加坡", "等值 US$300 或以上", "等值 US$45"],
            ["香港", "等值 US$300 或以上", "等值 US$45"],
            ["加拿大", "等值 US$150 或以上", "等值 US$20"],
          ],
        },
        bodyAfter: [
          "本地貨幣金額會依目前 Shopify Market 貨幣自動換算，並可能隨匯率更新而變動。促銷活動、產品資格、承運商服務範圍、海關限制或 Shopify Market 設定，皆可能影響配送可用性與最終運費。",
        ],
      },
      {
        heading: "收貨地址準確性",
        body: [
          "客戶須在結帳時填寫完整且正確的收貨地址。訂單提交後，地址修改無法獲得保證。",
          "如果配送地址不完整、不正確或無法投遞，訂單可能會延遲、退回或產生額外費用。",
        ],
      },
      {
        heading: "送達時效",
        body: [
          "頁面所示送達時間僅供參考。預計送達時間不構成保證，並可能受訂單處理、承運商延誤、天候、海關處理、監管審查或其他超出 VAVITAS 合理控制範圍的情況影響。",
          "配送範圍、預計送達時間、免運費資格及最終運費均以結帳頁面確認為準。",
        ],
      },
      {
        heading: "需要協助？",
        body: ["如對配送有任何疑問，請透過 info@vavitas-health.com 聯絡我們的支援團隊，並提供訂單編號及配送資訊。"],
      },
    ],
  },
};


export const returnsCopy: LangMap = {
  en: {
    eyebrow: "Customer Care",
    title: "Returns & Refunds",
    intro:
      "If something isn't right with your order, our support team is here to help. Please review our return guidelines below.",
    sections: [
      {
        heading: "1. Return Window",
        body: [
          "Please contact VAVITAS Customer Support within 30 days of delivery to request return authorization. Requests received after this window may not be eligible for review.",
        ],
      },
      {
        heading: "2. Return Eligibility",
        body: [
          "Unless a product arrives damaged, defective, or incorrect, returned products must be unopened, unused, and in their original packaging.",
          "For health and safety reasons, opened or partially used dietary supplements may not be eligible for return unless the product was damaged, defective, or incorrectly shipped.",
        ],
      },
      {
        heading: "3. How to Request a Return",
        body: [
          "Email VAVITAS Customer Support with your order number, a description of the issue, and any supporting photos. Photos of the product, packaging, shipping label, or damage may be required to review the request.",
          "Returns sent without prior authorization may not be accepted.",
        ],
      },
      {
        heading: "4. Damaged, Defective, Missing, or Incorrect Items",
        body: [
          "Please report damaged, defective, missing, or incorrect items promptly after delivery so our team can review the issue and assist you.",
        ],
      },
      {
        heading: "5. Refunds",
        body: [
          "Approved refunds will be issued to the original payment method after the returned product has been received and reviewed. Bank and payment-provider processing times may vary.",
          "Final refund approval is subject to order status, return authorization, and product condition upon review.",
        ],
      },
      {
        heading: "6. Shipping Fees, Duties, and Taxes",
        body: [
          "Shipping fees, customs duties, import taxes, brokerage fees, and related charges may be non-refundable unless otherwise required by applicable law.",
          "Original shipping charges are not refundable unless the return results from an error by VAVITAS or refunding those charges is required by law.",
        ],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "客户服务",
    title: "退货与退款",
    intro: "如您的订单存在任何问题，我们的客户支持团队将协助您处理。请参阅以下退货指引。",
    sections: [
      {
        heading: "1. 退货申请期限",
        body: [
          "请在订单送达后 30 天内联系 VAVITAS 客户支持并申请退货授权。超过该期限的申请可能无法受理。",
        ],
      },
      {
        heading: "2. 退货条件",
        body: [
          "除非产品在送达时存在破损、缺陷或发错货的情况，否则退回的产品必须未开封、未使用，并保持原包装。",
          "出于健康与安全原因，已开封或部分使用过的膳食补充剂通常不符合退货条件，除非产品存在破损、缺陷或发错货情况。",
        ],
      },
      {
        heading: "3. 如何申请退货",
        body: [
          "请通过邮件联系 VAVITAS 客户支持，并提供订单号、问题描述及相关照片。我们可能需要产品、包装、运输标签或破损情况的照片，以便审核申请。",
          "未经事先授权直接寄回的退货可能无法被接受。",
        ],
      },
      {
        heading: "4. 破损、缺陷、缺失或发错商品",
        body: [
          "如果收到破损、缺陷、缺失或发错的商品，请在送达后尽快联系我们，以便我们的团队审核并协助处理。",
        ],
      },
      {
        heading: "5. 退款",
        body: [
          "经批准的退款将在退回产品收到并审核后，退回至原付款方式。银行及支付服务商的处理时间可能有所不同。",
          "最终退款是否批准，将取决于订单状态、退货授权及产品审核后的实际情况。",
        ],
      },
      {
        heading: "6. 运费、关税与税费",
        body: [
          "运费、海关关税、进口税、清关代理费及相关费用通常可能不予退还，除非适用法律另有要求。",
          "原始运费通常不予退还，除非退货是由 VAVITAS 的错误造成，或法律要求退还相关费用。",
        ],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "客戶服務",
    title: "退貨與退款",
    intro: "如您的訂單有任何問題，我們的客戶支援團隊將協助您處理。請參閱以下退貨指引。",
    sections: [
      {
        heading: "1. 退貨申請期限",
        body: [
          "請在訂單送達後 30 天內聯絡 VAVITAS 客戶支援並申請退貨授權。逾期申請可能無法受理。",
        ],
      },
      {
        heading: "2. 退貨條件",
        body: [
          "除非產品於送達時存在破損、瑕疵或發錯貨的情況，否則退回的產品必須未開封、未使用，並保持原包裝。",
          "基於健康與安全考量，已開封或部分使用過的膳食補充品通常不符合退貨條件，除非產品存在破損、瑕疵或發錯貨情況。",
        ],
      },
      {
        heading: "3. 如何申請退貨",
        body: [
          "請透過電郵聯絡 VAVITAS 客戶支援，並提供訂單編號、問題說明及相關照片。我們可能需要產品、包裝、運送標籤或破損情況的照片，以利審核申請。",
          "未經事先授權直接寄回的退貨可能無法被接受。",
        ],
      },
      {
        heading: "4. 破損、瑕疵、缺件或發錯商品",
        body: [
          "如收到破損、瑕疵、缺件或發錯的商品，請於送達後儘快聯絡我們，以便我們的團隊審核並協助處理。",
        ],
      },
      {
        heading: "5. 退款",
        body: [
          "經核准的退款將在退回產品收到並審核後，退回至原付款方式。銀行及付款服務商的處理時間可能有所不同。",
          "最終退款是否核准，將取決於訂單狀態、退貨授權及產品審核後的實際情況。",
        ],
      },
      {
        heading: "6. 運費、關稅與稅費",
        body: [
          "運費、海關關稅、進口稅、清關代理費及相關費用通常可能不予退還，除非適用法律另有要求。",
          "原始運費通常不予退還，除非退貨係由 VAVITAS 的錯誤造成，或法律要求退還相關費用。",
        ],
      },
    ],
  },
};

export const privacyCopy: LangMap = {
  en: {
    eyebrow: "Customer Care",
    title: "Privacy Policy",
    intro:
      "VAVITAS respects your privacy. This policy explains the information we may collect and how we use it to provide and improve our products and services.",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "We may collect information you provide directly to us — such as your name, shipping address, email address, phone number, and payment details — when you place an order, create an account, contact support, or subscribe to our communications.",
          "We may also collect limited technical information automatically, such as device type, browser, and usage data through cookies and similar technologies.",
        ],
      },
      {
        heading: "How We Use Your Information",
        body: [
          "We use the information we collect to process and fulfill orders, provide customer support, manage member accounts and rewards, send transactional and marketing emails (where permitted), analyze website performance, and improve our products, services, and customer experience.",
        ],
      },
      {
        heading: "Email Marketing",
        body: [
          "If you opt in to marketing communications, you can unsubscribe at any time by clicking the unsubscribe link in our emails or by contacting us.",
        ],
      },
      {
        heading: "Sharing of Information",
        body: [
          "We do not sell your personal information. We may share information with trusted service providers (such as payment processors, shipping carriers, email platforms, and analytics providers) strictly to operate our business, and when required to comply with applicable laws.",
        ],
      },
      {
        heading: "Data Security",
        body: [
          "We use commercially reasonable safeguards to protect your information. However, no method of transmission or storage is completely secure.",
        ],
      },
      {
        heading: "Your Choices",
        body: [
          "You may request to access, update, or delete your personal information by contacting info@vavitas-health.com. We will respond in accordance with applicable laws.",
        ],
      },
      {
        heading: "Updates to This Policy",
        body: [
          "We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date.",
        ],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "客户服务",
    title: "隐私政策",
    intro:
      "VAVITAS 尊重并重视您的隐私。本政策说明我们可能收集的信息及其使用方式，以便为您提供并持续改进我们的产品与服务。",
    sections: [
      {
        heading: "我们收集的信息",
        body: [
          "当您下单、注册账户、联系客服或订阅我们的通讯时，我们可能直接收集您提供的信息，例如：姓名、收货地址、电子邮箱、电话号码及付款信息。",
          "我们也可能通过 Cookies 及类似技术自动收集有限的技术信息，例如设备类型、浏览器及网站使用数据。",
        ],
      },
      {
        heading: "信息的使用方式",
        body: [
          "我们使用所收集的信息以处理订单、提供客户支持、管理会员账户与权益、发送交易及营销邮件（在法律允许范围内）、分析网站表现，并不断优化产品、服务与客户体验。",
        ],
      },
      {
        heading: "邮件营销",
        body: ["如您选择接收营销邮件，您可随时通过邮件中的取消订阅链接或联系我们，取消订阅。"],
      },
      {
        heading: "信息共享",
        body: [
          "我们不会出售您的个人信息。我们可能与受信任的服务商（如支付机构、物流承运商、邮件平台、分析服务商）共享必要信息，仅限于运营所需，或依据适用法律的要求。",
        ],
      },
      {
        heading: "数据安全",
        body: ["我们采取商业上合理的安全措施保护您的信息。但请理解，互联网上的传输与存储无法做到绝对安全。"],
      },
      {
        heading: "您的权利",
        body: [
          "您可通过 info@vavitas-health.com 联系我们，申请访问、更新或删除您的个人信息。我们将依据适用法律予以回应。",
        ],
      },
      {
        heading: "政策更新",
        body: ["我们可能不定期更新本隐私政策。重大变更将在本页面公布，并标注最新生效日期。"],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "客戶服務",
    title: "隱私政策",
    intro:
      "VAVITAS 尊重並重視您的隱私。本政策說明我們可能收集的資訊及其使用方式，以便為您提供並持續改善我們的產品與服務。",
    sections: [
      {
        heading: "我們收集的資訊",
        body: [
          "當您下單、註冊帳戶、聯絡客服或訂閱我們的通訊時，我們可能直接收集您所提供的資訊，例如：姓名、收貨地址、電子郵件、電話號碼及付款資訊。",
          "我們也可能透過 Cookies 及類似技術自動收集有限的技術資訊，例如裝置類型、瀏覽器及網站使用資料。",
        ],
      },
      {
        heading: "資訊的使用方式",
        body: [
          "我們使用所收集的資訊以處理訂單、提供客戶支援、管理會員帳戶與權益、發送交易及行銷郵件（於法律允許範圍內）、分析網站表現，並持續優化產品、服務與客戶體驗。",
        ],
      },
      {
        heading: "電郵行銷",
        body: ["如您選擇接收行銷郵件，您可隨時透過郵件中的取消訂閱連結或聯絡我們，取消訂閱。"],
      },
      {
        heading: "資訊分享",
        body: [
          "我們不會出售您的個人資訊。我們可能與受信任的服務商（如金流業者、物流承運商、電郵平台、分析服務商）分享必要資訊，僅限於業務運作所需，或依適用法律之要求。",
        ],
      },
      {
        heading: "資料安全",
        body: ["我們採取商業上合理的安全措施保護您的資訊。但請理解，網路上的傳輸與儲存無法做到絕對安全。"],
      },
      {
        heading: "您的權利",
        body: [
          "您可透過 info@vavitas-health.com 聯絡我們，申請查閱、更新或刪除您的個人資訊。我們將依適用法律予以回應。",
        ],
      },
      {
        heading: "政策更新",
        body: ["我們可能不定期更新本隱私政策。重大變更將於本頁面公告，並標註最新生效日期。"],
      },
    ],
  },
};

export const termsCopy: LangMap = {
  en: {
    eyebrow: "Customer Care",
    title: "Terms of Service",
    intro:
      "These Terms govern your use of the VAVITAS website and the purchase of our dietary supplements. By using our site or placing an order, you agree to these Terms.",
    sections: [
      {
        heading: "Website Use",
        body: [
          "You agree to use the VAVITAS website for lawful purposes only. You may not interfere with the site's operation, attempt unauthorized access, or use the site in any way that violates applicable laws or regulations.",
        ],
      },
      {
        heading: "Product Information",
        body: [
          "We work to keep product information, ingredients, imagery, and descriptions accurate and up to date. Minor variations may occur, and we do not warrant that all product information is free from errors. VAVITAS products are dietary supplements intended to support general wellness routines.",
        ],
      },
      {
        heading: "Order Acceptance & Pricing",
        body: [
          "All orders are subject to acceptance and product availability. We reserve the right to refuse or cancel any order, including in cases of suspected fraud, pricing errors, or supply limitations.",
          "Prices are displayed in the currency shown at checkout and may change without notice. Applicable taxes, shipping, and any duties will be calculated at checkout where required.",
        ],
      },
      {
        heading: "Promotions",
        body: [
          "Promotional offers, member benefits, and discounts are subject to their respective terms and any eligibility requirements displayed at checkout. We reserve the right to modify or end promotions at any time.",
        ],
      },
      {
        heading: "Account Responsibility",
        body: [
          "If you create a member account through our authorized commerce platform, you are responsible for keeping your login credentials secure and for activity that occurs under your account.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by law, VAVITAS, its affiliates, and its suppliers shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the site or any products purchased through it.",
          "VAVITAS products are not intended to diagnose, treat, cure, or prevent any disease. Please consult a qualified healthcare professional before starting any new supplement, especially if you are pregnant, nursing, taking medication, or have a medical condition.",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "All content on this site, including text, graphics, logos, and product imagery, is the property of Vavitas Inc. or its licensors and is protected by applicable intellectual property laws.",
        ],
      },
      {
        heading: "Changes to These Terms",
        body: [
          "We may update these Terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated Terms.",
        ],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "客户服务",
    title: "服务条款",
    intro: "本条款适用于您使用 VAVITAS 网站及购买我们膳食补充剂的相关行为。使用本网站或下单即表示您同意以下条款。",
    sections: [
      {
        heading: "网站使用",
        body: [
          "您同意仅将 VAVITAS 网站用于合法用途，不得干扰网站运作、尝试未经授权的访问，或以任何违反适用法律法规的方式使用本网站。",
        ],
      },
      {
        heading: "产品信息",
        body: [
          "我们致力于确保产品信息、成分、图片及说明的准确性与时效性。轻微差异可能在所难免，我们无法保证所有信息均无误。VAVITAS 产品为膳食补充剂，旨在支持日常健康生活方式。",
        ],
      },
      {
        heading: "订单确认与价格",
        body: [
          "所有订单的成立须以我们的确认及产品供应情况为准。在涉嫌欺诈、价格异常或库存受限等情况下，我们保留拒绝或取消订单的权利。",
          "页面所示价格以结账时显示的币种为准，并可能在不另行通知的情况下调整。相关税费、运费及关税将于结账时按需计算。",
        ],
      },
      {
        heading: "促销活动",
        body: [
          "促销活动、会员权益及折扣均受其各自条款及结账页所示资格要求约束。我们保留随时调整或终止促销活动的权利。",
        ],
      },
      {
        heading: "账户责任",
        body: ["如您通过我们授权的电商平台注册会员账户，请妥善保管登录凭证，并对账户下发生的所有活动负责。"],
      },
      {
        heading: "责任限制",
        body: [
          "在适用法律允许的最大范围内，VAVITAS 及其关联方与供应商对您因使用本网站或所购产品而产生的任何间接、附带、特别或衍生性损害概不承担责任。",
          "VAVITAS 产品不用于诊断、治疗、治愈或预防任何疾病。在开始使用任何新的补充剂前，建议先咨询合格的医疗保健专业人士，孕妇、哺乳期女性、正在服药或患有疾病者尤须注意。",
        ],
      },
      {
        heading: "知识产权",
        body: [
          "本网站上的所有内容，包括文本、图形、标识及产品图片，均归 Vavitas Inc. 或其授权方所有，并受相关知识产权法律保护。",
        ],
      },
      {
        heading: "条款变更",
        body: ["我们可能不定期更新本条款。条款变更后您继续使用本网站，即视为接受更新后的条款。"],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "客戶服務",
    title: "服務條款",
    intro: "本條款適用於您使用 VAVITAS 網站及購買我們膳食補充品的相關行為。使用本網站或下單即表示您同意以下條款。",
    sections: [
      {
        heading: "網站使用",
        body: [
          "您同意僅將 VAVITAS 網站用於合法用途，不得干擾網站運作、嘗試未經授權的存取，或以任何違反適用法律法規的方式使用本網站。",
        ],
      },
      {
        heading: "產品資訊",
        body: [
          "我們致力於確保產品資訊、成分、圖片及說明的正確性與時效性。輕微差異可能在所難免，我們無法保證所有資訊皆無誤。VAVITAS 產品為膳食補充品，旨在支持日常健康生活方式。",
        ],
      },
      {
        heading: "訂單成立與價格",
        body: [
          "所有訂單之成立須以我們的確認及產品供應情況為準。於涉嫌詐欺、價格異常或庫存受限等情況下，我們保留拒絕或取消訂單之權利。",
          "頁面所示價格以結帳時顯示之幣別為準，並可能在不另行通知之情況下調整。相關稅費、運費及關稅將於結帳時依需計算。",
        ],
      },
      {
        heading: "促銷活動",
        body: [
          "促銷活動、會員權益及折扣均受其各自條款及結帳頁所示資格要求約束。我們保留隨時調整或終止促銷活動之權利。",
        ],
      },
      {
        heading: "帳戶責任",
        body: ["如您透過我們授權的電商平台註冊會員帳戶，請妥善保管登入憑證，並對該帳戶下發生的所有活動負責。"],
      },
      {
        heading: "責任限制",
        body: [
          "於適用法律允許之最大範圍內，VAVITAS 及其關係企業與供應商對您因使用本網站或所購產品所生之任何間接、附帶、特別或衍生性損害概不負責。",
          "VAVITAS 產品不用於診斷、治療、治癒或預防任何疾病。開始使用任何新的補充品前，建議先諮詢合格的醫療保健專業人員，孕婦、哺乳期女性、正在服藥或患有疾病者尤須注意。",
        ],
      },
      {
        heading: "智慧財產權",
        body: [
          "本網站上的所有內容，包括文字、圖形、標識及產品圖片，均歸 Vavitas Inc. 或其授權方所有，並受相關智慧財產權法律保護。",
        ],
      },
      {
        heading: "條款變更",
        body: ["我們可能不定期更新本條款。條款變更後您繼續使用本網站，即視為接受更新後之條款。"],
      },
    ],
  },
};

export const supportCopy: LangMap = {
  en: {
    eyebrow: "Customer Care",
    title: "Contact Support",
    intro:
      "For questions about orders, shipping, returns, product information, or membership support, please contact the VAVITAS support team.",
    sections: [
      {
        heading: "Email",
        body: ["support@vavitas-health.com"],
      },
      {
        heading: "Company",
        body: ["Vavitas Inc."],
      },
      {
        heading: "Location",
        body: ["Cliffside Park, NJ 07010, USA"],
      },
      {
        heading: "Response Time",
        body: [
          "Our team typically responds within 1–2 business days. When contacting us about an order, please include your order number so we can assist you as quickly as possible.",
        ],
      },
    ],
  },
  "zh-CN": {
    eyebrow: "客户服务",
    title: "联系客服",
    intro: "如您对订单、配送、退换货、产品信息或会员服务有任何疑问，欢迎联系 VAVITAS 客户支持团队。",
    sections: [
      { heading: "电子邮箱", body: ["support@vavitas-health.com"] },
      { heading: "公司", body: ["Vavitas Inc."] },
      { heading: "地址", body: ["Cliffside Park, NJ 07010, USA"] },
      {
        heading: "响应时间",
        body: ["我们的团队通常会在 1–2 个工作日内回复。如咨询订单相关事宜，请附上订单编号，以便我们尽快为您处理。"],
      },
    ],
  },
  "zh-TW": {
    eyebrow: "客戶服務",
    title: "聯絡客服",
    intro: "如您對訂單、配送、退換貨、產品資訊或會員服務有任何疑問，歡迎聯絡 VAVITAS 客戶支援團隊。",
    sections: [
      { heading: "電子郵件", body: ["support@vavitas-health.com"] },
      { heading: "公司", body: ["Vavitas Inc."] },
      { heading: "地址", body: ["Cliffside Park, NJ 07010, USA"] },
      {
        heading: "回覆時效",
        body: ["我們的團隊通常會在 1–2 個工作天內回覆。如諮詢訂單相關事宜，請附上訂單編號，以便我們儘速為您處理。"],
      },
    ],
  },
};
