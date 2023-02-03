import { SvgProps } from 'react-native-svg'

import Add from '../../assets/icons/add.svg'
import ArrangeCircle from '../../assets/icons/arrange-circle.svg'
import ArrowDown from '../../assets/icons/arrow-down.svg'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import ArrowUp from '../../assets/icons/arrow-up.svg'
import ArrowLeft2 from '../../assets/icons/arrow-left-2.svg'
import ArrowRight2 from '../../assets/icons/arrow-right-2.svg'
import ArrowDown2 from '../../assets/icons/arrow-down-2.svg'
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
import Copy from '../../assets/icons/copy.svg'
import DocumentText from '../../assets/icons/document-text.svg'
import DocumentUpload from '../../assets/icons/document-upload.svg'
import Edit from '../../assets/icons/edit.svg'
import Edit2 from '../../assets/icons/edit-2.svg'
import Email from '../../assets/icons/email.svg'
import Export from '../../assets/icons/export.svg'
import External from '../../assets/icons/external.svg'
import Eye from '../../assets/icons/eye.svg'
import EyeSlash from '../../assets/icons/eye-slash.svg'
import Filter from '../../assets/icons/filter.svg'
import GalleryAdd from '../../assets/icons/gallery-add.svg'
import Gallery from '../../assets/icons/gallery.svg'
import GasStattion from '../../assets/icons/gas-station.svg'
import Home from '../../assets/icons/home.svg'
import Incoming from '../../assets/icons/incoming.svg'
import InfoCircle from '../../assets/icons/info-circle.svg'
import Inside from '../../assets/icons/inside.svg'
import Key from '../../assets/icons/key.svg'
import KeySquare from '../../assets/icons/key-square.svg'
import Layer from '../../assets/icons/layer.svg'
import Link from '../../assets/icons/link.svg'
import Link2 from '../../assets/icons/link-2.svg'
import Lock from '../../assets/icons/lock.svg'
import Logout from '../../assets/icons/logout.svg'
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
import Refresh from '../../assets/icons/refresh.svg'
import SearchNormal from '../../assets/icons/search-normal.svg'
import SecurityTime from '../../assets/icons/security-time.svg'
import Setting from '../../assets/icons/setting.svg'
import Share from '../../assets/icons/share.svg'
import ShareNetwork from '../../assets/icons/share-network.svg'
import ShieldTick from '../../assets/icons/shield-tick.svg'
import ShieldTick2 from '../../assets/icons/shield-tick-2.svg'
import Strongbox from '../../assets/icons/strongbox.svg'
import Task from '../../assets/icons/task.svg'
import TaskSquare from '../../assets/icons/task-square.svg'
import TicketDiscount from '../../assets/icons/ticket-discount.svg'
import Trash from '../../assets/icons/trash.svg'
import TrendUp from '../../assets/icons/trend-up.svg'
import UserEdit from '../../assets/icons/user-edit.svg'
import WalletAdd from '../../assets/icons/wallet-add.svg'
import WalletMoney from '../../assets/icons/wallet-money.svg'
import Wallet from '../../assets/icons/wallet.svg'
import Warning from '../../assets/icons/warning.svg'

export interface IconProps extends SvgProps {
  variant: keyof typeof icons
}

const icons = {
  add: Add,
  arrangeCircle: ArrangeCircle,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  arrowLeft2: ArrowLeft2,
  arrowRight2: ArrowRight2,
  arrowDown2: ArrowDown2,
  award: Award,
  book: Book,
  buyCrypto: BuyCrypto,
  calendar: Calendar,
  category: Category,
  chartSquare: ChartSqare,
  circleChekFill: CircleChekFill,
  clipboardText: ClipboardText,
  clock: Clock,
  closeCircle: CloseCircle,
  close: Close,
  coin: Coin,
  coin2: Coin2,
  copy: Copy,
  documentText: DocumentText,
  documentUpload: DocumentUpload,
  edit: Edit,
  edit2: Edit2,
  email: Email,
  export: Export,
  external: External,
  eye: Eye,
  eyeSlash: EyeSlash,
  filter: Filter,
  galleryAdd: GalleryAdd,
  gallery: Gallery,
  gasStattion: GasStattion,
  home: Home,
  incoming: Incoming,
  infoCircle: InfoCircle,
  inside: Inside,
  key: Key,
  keySquare: KeySquare,
  layer: Layer,
  link: Link,
  link2: Link2,
  lock: Lock,
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
  refresh: Refresh,
  searchNormal: SearchNormal,
  securityTime: SecurityTime,
  setting: Setting,
  share: Share,
  shareNetwork: ShareNetwork,
  shieldTick: ShieldTick,
  shieldTick2: ShieldTick2,
  strongbox: Strongbox,
  task: Task,
  taskSquare: TaskSquare,
  ticketDiscount: TicketDiscount,
  trash: Trash,
  trendUp: TrendUp,
  userEdit: UserEdit,
  walletAdd: WalletAdd,
  walletMoney: WalletMoney,
  wallet: Wallet,
  warning: Warning,
}

export const Icon: React.FC<IconProps> = ({
  variant,
  width = 24,
  height = 24,
  fill = 'currentColor',
  ...props
}) => {
  const IconComponent = icons[variant]
  return <IconComponent width={width} height={height} fill={fill} {...props} />
}
