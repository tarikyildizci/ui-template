import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  ControlItemCmmi,
  ControlItemRefresh,
  ControlItemScopeType,
  ControlItemStatus,
  ControlItemType,
  NistFramework,
} from '@/types'
import { Alert, AlertDescription } from '../ui/alert'
import {
  BadgeCheck,
  BookText,
  CircleDashed,
  ExternalLink,
  Eye,
  OctagonX,
  Radar,
  RotateCcw,
  Shield,
  TriangleAlert,
  Undo2,
} from 'lucide-react'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { PropsWithChildren } from 'react'
import { cn } from '@/lib'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

type ControlDrawerProps = {
  controlItem: ControlItemType
}

export const ControlDrawer: React.FC<ControlDrawerProps> = ({
  controlItem,
}) => {
  const {
    id,
    controlId,
    description,
    guidance,
    name,
    assignee,
    references,
    nistFramework,
    refresh,
    scope,
    status,
    files,
  } = controlItem

  return (
    <Sheet data-testid={`control-item-sheet_${id}`}>
      <SheetTrigger asChild>
        <Button variant="outline">Edit</Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>
            {controlId} - {name}
          </SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
        <div className="pt-2 pb-4 space-y-8 grow overflow-auto">
          <div className="flex gap-1 flex-wrap">
            <p className="text-sm text-muted-foreground">References:</p>
            {references.map((reference) => (
              <Badge variant="outline" key={reference}>
                {reference}
              </Badge>
            ))}
          </div>
          <Alert>
            <BookText className="h-4 w-4" />
            <AlertDescription>{guidance}</AlertDescription>
          </Alert>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <h2 className="text-md font-medium">CMMI Level - </h2>
              <p className="text-md font-semibold text-red-400">Initial</p>
            </div>
            <div className="flex justify-between gap-1">
              <Tabs className="w-full">
                <TabsList className="w-full justify-around">
                  <TabsTrigger
                    className="grow"
                    value={ControlItemCmmi.INITIAL.toString()}
                  >
                    1
                  </TabsTrigger>
                  <TabsTrigger
                    className="grow"
                    value={ControlItemCmmi.DEFINED.toString()}
                  >
                    2
                  </TabsTrigger>
                  <TabsTrigger
                    className="grow"
                    value={ControlItemCmmi.MANAGED.toString()}
                  >
                    3
                  </TabsTrigger>
                  <TabsTrigger
                    className="grow"
                    value={ControlItemCmmi.QUANTITATIVELY_MANAGED.toString()}
                  >
                    4
                  </TabsTrigger>
                  <TabsTrigger
                    className="grow"
                    value={ControlItemCmmi.OPTIMIZING.toString()}
                  >
                    5
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr] bg-muted gap-2 rounded-lg px-4 py-2 border">
            <DetailLabel>Status</DetailLabel>
            {getStatus(status)}
            <Separator className="col-span-2" />
            <DetailLabel>Assignee</DetailLabel>
            <DetailValue>{assignee.name}</DetailValue>
            <Separator className="col-span-2" />
            <DetailLabel>Refresh Rate</DetailLabel>
            <DetailValue>
              {refresh
                ? `${refresh.period} ${getRefreshLabel(refresh.type)}`
                : 'None'}
            </DetailValue>
            <Separator className="col-span-2" />
            <DetailLabel>NIST Labels</DetailLabel>

            {nistFramework ? (
              getNistLabel(nistFramework)
            ) : (
              <DetailValue>None</DetailValue>
            )}

            <Separator className="col-span-2" />
            <DetailLabel>Scope</DetailLabel>
            <DetailValue>{getScopeLabel(scope)}</DetailValue>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-medium">Files</h2>
            <div className="flex gap-1 flex-wrap">
              {files.map((file) => (
                <a
                  key={file.id}
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Badge variant="outline">{file.name}</Badge>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-medium">Related Tasks</h2>
            <div className="flex gap-4 flex-wrap">
              <div className="hover:shadow-md transition-all cursor-pointer rounded-lg border p-3 flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="flex gap-1 items-center hover:underline cursor-pointer">
                      <h3 className="text-md font-medium">ID: 247</h3>
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Type: SME Check
                    </p>
                  </div>
                  <div className="rounded-lg border h-fit px-1 py-0.5 bg-yellow-100 border-yellow-500">
                    <p className="text-xs text-yellow-500 font-bold">
                      In Progress
                    </p>
                  </div>
                </div>
                <Separator />
                <p className="text-xs text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  maiores minima exercitationem at facilis iusto quis rem rerum,
                  neque fugit laudantium non quas quaerat, voluptas dolor quos
                  atque, eos nulla.
                </p>
              </div>
              <div className="rounded-lg border p-3 flex flex-col gap-1">
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <div className="flex gap-1 items-center hover:underline cursor-pointer">
                      <h3 className="text-md font-medium">ID: 247</h3>
                      <ExternalLink className="h-4 w-4 text-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Type: SME Check
                    </p>
                  </div>
                  <div className="rounded-lg border h-fit px-1 py-0.5 bg-yellow-100 border-yellow-500">
                    <p className="text-xs text-yellow-500 font-bold">
                      In Progress
                    </p>
                  </div>
                </div>
                <Separator />
                <p className="text-xs text-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  maiores minima exercitationem at facilis iusto quis rem rerum,
                  neque fugit laudantium non quas quaerat, voluptas dolor quos
                  atque, eos nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const DetailLabel: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="text-sm text-foreground">{children}</p>
)
const DetailValue: React.FC<
  PropsWithChildren & { className?: HTMLElement['className'] }
> = ({ children, className }) => (
  <p className={cn('text-end text-sm text-muted-foreground', className)}>
    {children}
  </p>
)

const getRefreshLabel = (refreshType: ControlItemRefresh) => {
  switch (refreshType) {
    case ControlItemRefresh.DAILY:
      return 'Days'
    case ControlItemRefresh.WEEKLY:
      return 'Weeks'
    case ControlItemRefresh.MONTHLY:
      return 'Months'
    case ControlItemRefresh.QUARTERLY:
      return 'Quarters'
    case ControlItemRefresh.YEARLY:
      return 'Years'
  }
}

const getNistLabel = (nistFramework: Array<NistFramework>) => {
  const labels = []

  for (const framework of nistFramework) {
    switch (framework) {
      case NistFramework.IDENTIFY:
        labels.push({ label: 'Identify', icon: Eye })
        break
      case NistFramework.PROTECT:
        labels.push({ label: 'Protect', icon: Shield })
        break
      case NistFramework.DETECT:
        labels.push({ label: 'Detect', icon: Radar })
        break
      case NistFramework.RESPOND:
        labels.push({ label: 'Respond', icon: Undo2 })
        break
      case NistFramework.RECOVER:
        labels.push({ label: 'Recover', icon: RotateCcw })
        break
    }
  }

  return (
    <div className="flex gap-1 justify-end flex-wrap">
      {labels.map(({ label, icon: Icon }) => (
        <Badge key={label} variant="outline">
          <Icon className="h-4 w-4 mr-1" />
          {label}
        </Badge>
      ))}
    </div>
  )
}

const getScopeLabel = (scope: ControlItemScopeType) => {
  switch (scope) {
    case ControlItemScopeType.TEAM:
      return 'Team'
    case ControlItemScopeType.ORGANIZATION:
      return 'Organization'
    case ControlItemScopeType.PRODUCT:
      return 'Product'
  }
}

const getStatus = (status: ControlItemStatus) => {
  switch (status) {
    case ControlItemStatus.OK:
      return (
        <div className="flex gap-1 justify-end items-center">
          <BadgeCheck className="h-4 w-4 text-green-500" />
          <DetailValue className="text-green-500">Ok</DetailValue>
        </div>
      )

    case ControlItemStatus.NOT_OK:
      return (
        <div className="flex gap-1 justify-end items-center">
          <OctagonX className="h-4 w-4 text-red-500" />
          <DetailValue className="text-red-500">Not Ok</DetailValue>
        </div>
      )
    case ControlItemStatus.NOT_APPLICABLE:
      return (
        <div className="flex gap-1 justify-end items-center">
          <CircleDashed className="h-4 w-4 text-gray-500" />
          <DetailValue className="text-gray-500">Not Applicable</DetailValue>
        </div>
      )
    case ControlItemStatus.FURTHER_INFORMATION_REQUIRED:
      return (
        <div className="flex gap-1 justify-end items-center">
          <TriangleAlert className="h-4 w-4 text-orange-500" />
          <DetailValue className="text-orange-500">
            Further Information Required
          </DetailValue>
        </div>
      )
  }
}
