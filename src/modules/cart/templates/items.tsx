import { LineItem, Region } from "@medusajs/medusa"
import SkeletonLineItem from "@modules/common/components/skeleton-line-item"
import Item from "../components/item"

type ItemsTemplateProps = {
  items?: Omit<LineItem, "beforeInsert">[]
  region?: Region
}

const ItemsTemplate = ({ items, region }: ItemsTemplateProps) => {
  return (
    <div className="bg-white p-6 pt-0">
      <div className="border-b border-gray-200 pt-6 pb-3 flex items-center justify-between">
        <h1 className="text-xl-semi">Shopping Bag</h1>
        <span className="font-no">{items?.length} item(s)</span>
      </div>
      <div className="grid grid-cols-1 gap-y-8 py-8">
        {items && region
          ? items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => {
                return <Item key={item.id} item={item} region={region} />
              })
          : Array.from(Array(5).keys()).map((i) => {
              return <SkeletonLineItem key={i} />
            })}
      </div>
    </div>
  )
}

export default ItemsTemplate
