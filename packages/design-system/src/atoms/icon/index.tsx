import { SvgProps } from 'react-native-svg'

import Add from '../../assets/icons/add.svg'
import AddSquare from '../../assets/icons/add-square.svg'
import ArrangeCircle from '../../assets/icons/arrange-circle.svg'
import ArrowDown from '../../assets/icons/arrow-down.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowRightSolid from '../../assets/icons/arrow-right-solid.svg'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import ArrowLeft2 from '../../assets/icons/arrow-left-2.svg'
import ArrowRight2 from '../../assets/icons/arrow-right-2.svg'
import ArrowDown2 from '../../assets/icons/arrow-down-2.svg'
import ArrowDownSolid from '../../assets/icons/arrow-down-solid.svg'
import Award from '../../assets/icons/award.svg'
import Book from '../../assets/icons/book.svg'
import BuyCrypto from '../../assets/icons/buy-crypto.svg'
import Calendar from '../../assets/icons/calendar.svg'
import Category from '../../assets/icons/category.svg'
import ChartSqare from '../../assets/icons/chart-square.svg'
import CircleChekFill from '../../assets/icons/circle-check-fill.svg'
import ClipboardText from '../../assets/icons/clipboard-text.svg'
import Clock from '../../assets/icons/clock.svg'
import CloseCircle from '../../assets/icons/close-circle.svg'
import Close from '../../assets/icons/close.svg'
import Coin from '../../assets/icons/coin.svg'
import Coin2 from '../../assets/icons/coin-2.svg'
import Coingecko from '../../assets/icons/coingecko.svg'
import Coinmarketcap from '../../assets/icons/coinmarketcap.svg'
import Copy from '../../assets/icons/copy.svg'
import DiscordFill from '../../assets/icons/discord-fill.svg'
import DocumentText from '../../assets/icons/document-text.svg'
import DocumentTextSolid from '../../assets/icons/document-text-solid.svg'
import DocumentUpload from '../../assets/icons/document-upload.svg'
import Edit from '../../assets/icons/edit.svg'
import Edit2 from '../../assets/icons/edit-2.svg'
import Email from '../../assets/icons/email.svg'
import Export from '../../assets/icons/export.svg'
import External from '../../assets/icons/external.svg'
import Eye from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-slash.svg'
import FacebookF from '../../assets/icons/facebook-f.svg'
import Filter from '../../assets/icons/filter.svg'
import GalleryAdd from '../../assets/icons/gallery-add.svg'
import Gallery from '../../assets/icons/gallery.svg'
import GasStation from '../../assets/icons/gas-station.svg'
import Github from '../../assets/icons/github.svg'
import Global from '../../assets/icons/global.svg'
import Google from '../../assets/icons/google.svg'
import Home from '../../assets/icons/home.svg'
import Incoming from '../../assets/icons/incoming.svg'
import InfoCircle from '../../assets/icons/info-circle.svg'
import Inside from '../../assets/icons/inside.svg'
import InstagramFill from '../../assets/icons/instagram-fill.svg'
import Key from '../../assets/icons/key.svg'
import KeySquare from '../../assets/icons/key-square.svg'
import Layer from '../../assets/icons/layer.svg'
import Link from '../../assets/icons/link.svg'
import Link2 from '../../assets/icons/link-2.svg'
import Linkedin from '../../assets/icons/linkedin.svg'
import Lock from '../../assets/icons/lock.svg'
import RollLogo from '../../assets/icons/roll-logo.svg'
import Logout from '../../assets/icons/logout.svg'
import LogoText from '../../assets/icons/logo-text.svg'
import Menu from '../../assets/icons/menu.svg'
import Minus from '../../assets/icons/minus.svg'
import Money from '../../assets/icons/money.svg'
import Moneys from '../../assets/icons/moneys.svg'
import Note from '../../assets/icons/note.svg'
import Notification from '../../assets/icons/notification.svg'
import Outgoing from '../../assets/icons/outgoing.svg'
import Outside from '../../assets/icons/outside.svg'
import People from '../../assets/icons/people.svg'
import Profile from '../../assets/icons/profile.svg'
import QuestionCircle from '../../assets/icons/question-circle.svg'
import Receipt from '../../assets/icons/receipt.svg'
import ReceiptEdit from '../../assets/icons/receipt-edit.svg'
import ReceiptSearch from '../../assets/icons/receipt-search.svg'
import Reddit from '../../assets/icons/reddit.svg'
import Refresh from '../../assets/icons/refresh.svg'
import RollBlack from '../../assets/icons/roll-black.svg'
import RollIso from '../../assets/icons/roll-iso.svg'
import SearchNormal from '../../assets/icons/search-normal.svg'
import SecurityTime from '../../assets/icons/security-time.svg'
import Setting from '../../assets/icons/setting.svg'
import Share from '../../assets/icons/share.svg'
import ShareNetwork from '../../assets/icons/share-network.svg'
import ShieldTick from '../../assets/icons/shield-tick.svg'
import ShieldTick2 from '../../assets/icons/shield-tick-2.svg'
import Slack from '../../assets/icons/slack.svg'
import Sms from '../../assets/icons/sms.svg'
import Strongbox from '../../assets/icons/strongbox.svg'
import Task from '../../assets/icons/task.svg'
import TaskSquare from '../../assets/icons/task-square.svg'
import Telegram from '../../assets/icons/telegram.svg'
import Tiktok from '../../assets/icons/tiktok.svg'
import TicketDiscount from '../../assets/icons/ticket-discount.svg'
import Trash from '../../assets/icons/trash.svg'
import TrendUp from '../../assets/icons/trend-up.svg'
import Twitter from '../../assets/icons/twitter.svg'
import UserEdit from '../../assets/icons/user-edit.svg'
import Verify from '../../assets/icons/verify.svg'
import WalletAdd from '../../assets/icons/wallet-add.svg'
import WalletMoney from '../../assets/icons/wallet-money.svg'
import Wallet from '../../assets/icons/wallet.svg'
import Warning from '../../assets/icons/warning.svg'
import Youtube from '../../assets/icons/youtube.svg'

export type IconVariant = keyof typeof icons
export interface IconProps extends SvgProps {
  variant: IconVariant
}

const icons = {
  add: Add,
  addSquare: AddSquare,
  arrangeCircle: ArrangeCircle,
  arrowDown: ArrowDown,
  arrowDownSolid: ArrowDownSolid,
  arrowDown2: ArrowDown2,
  arrowLeft: ArrowLeft,
  arrowLeft2: ArrowLeft2,
  arrowRight: ArrowRight,
  arrowRightSolid: ArrowRightSolid,
  arrowRight2: ArrowRight2,
  arrowUp: ArrowUp,
  award: Award,
  book: Book,
  buyCrypto: BuyCrypto,
  calendar: Calendar,
  category: Category,
  chartSquare: ChartSqare,
  circleChekFill: CircleChekFill,
  clipboardText: ClipboardText,
  clock: Clock,
  close: Close,
  closeCircle: CloseCircle,
  coingecko: Coingecko,
  coin: Coin,
  coin2: Coin2,
  coinmarketcap: Coinmarketcap,
  copy: Copy,
  discordFill: DiscordFill,
  documentText: DocumentText,
  documentTextSolid: DocumentTextSolid,
  documentUpload: DocumentUpload,
  edit: Edit,
  edit2: Edit2,
  email: Email,
  export: Export,
  external: External,
  eye: Eye,
  eyeSlash: EyeSlash,
  facebookF: FacebookF,
  filter: Filter,
  gallery: Gallery,
  galleryAdd: GalleryAdd,
  gasStation: GasStation,
  github: Github,
  global: Global,
  google: Google,
  home: Home,
  incoming: Incoming,
  infoCircle: InfoCircle,
  inside: Inside,
  instagramFill: InstagramFill,
  key: Key,
  keySquare: KeySquare,
  layer: Layer,
  linkedin: Linkedin,
  link: Link,
  link2: Link2,
  lock: Lock,
  logoText: LogoText,
  logout: Logout,
  menu: Menu,
  minus: Minus,
  money: Money,
  moneys: Moneys,
  note: Note,
  notification: Notification,
  outgoing: Outgoing,
  outside: Outside,
  people: People,
  profile: Profile,
  questionCircle: QuestionCircle,
  receipt: Receipt,
  receiptEdit: ReceiptEdit,
  receiptSearch: ReceiptSearch,
  reddit: Reddit,
  refresh: Refresh,
  rollBlack: RollBlack,
  rollIso: RollIso,
  rollLogo: RollLogo,
  searchNormal: SearchNormal,
  securityTime: SecurityTime,
  setting: Setting,
  share: Share,
  shareNetwork: ShareNetwork,
  shieldTick: ShieldTick,
  shieldTick2: ShieldTick2,
  slack: Slack,
  sms: Sms,
  strongbox: Strongbox,
  task: Task,
  taskSquare: TaskSquare,
  telegram: Telegram,
  ticketDiscount: TicketDiscount,
  tiktok: Tiktok,
  trash: Trash,
  trendUp: TrendUp,
  twitter: Twitter,
  userEdit: UserEdit,
  verify: Verify,
  wallet: Wallet,
  walletAdd: WalletAdd,
  walletMoney: WalletMoney,
  warning: Warning,
  youtube: Youtube,
}

export const Icon = ({
  variant,
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}: IconProps) => {
  const IconComponent = icons[variant]
  return <IconComponent width={width} height={height} fill={fill} {...props} />
}
