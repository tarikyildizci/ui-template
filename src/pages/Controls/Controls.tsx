import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ControlDrawer } from '@/components/upsupply/ControlDrawer'
import {
  AssigneeType,
  ControlItemRefresh,
  ControlItemScopeType,
  ControlItemStatus,
  NistFramework,
} from '@/types'
import React from 'react'

export const Controls: React.FC = () => {
  return (
    <div className="py-2 px-4 flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Control Item</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Refresh Level</TableHead>
            <TableHead>References</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              <ControlDrawer
                controlItem={{
                  id: '73E61076-11D7-449B-9E52-017574F724F1',
                  controlId: '1.1.1',
                  name: 'Are people being selected based on how many days they took to finish primary school?',
                  description:
                    'The education levels of the people to be employed will affect their work quality and related security conditions within the institution.',
                  guidance:
                    'Job descriptions and job postings in human resources can be used to review this criterion for selecting candidates.',
                  scope: ControlItemScopeType.PRODUCT,
                  assignee: {
                    type: AssigneeType.USER,
                    id: 'D140DC4C-AE55-4BE2-81F2-82EB2053B27D',
                    name: 'Walter White',
                  },
                  status: ControlItemStatus.OK,
                  files: [
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_DESCRIPTION.pdf',
                      description: 'Job description for the SME position',
                      url: 'https://example.com',
                    },
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_POSTING_SME_JAN.png',
                      description:
                        'A screenshot of the job posting for the SME position in January.',
                      url: 'https://example.com',
                    },
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_POSTING_SME_OCT.pdf',
                      description:
                        'A PDF of the job posting for the SME position in October.',
                      url: 'https://example.com',
                    },
                  ],
                  references: ['ISO21434 5.2.2'],
                  nistFramework: [NistFramework.RECOVER, NistFramework.RESPOND],
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              <ControlDrawer
                controlItem={{
                  id: '73E61076-11D7-449B-9E52-017574F724F1',
                  controlId: '1.1.1',
                  name: 'Are people being selected based on how many days they took to finish primary school?',
                  description:
                    'The education levels of the people to be employed will affect their work quality and related security conditions within the institution.',
                  guidance:
                    'Job descriptions and job postings in human resources can be used to review this criterion for selecting candidates.',
                  scope: ControlItemScopeType.ORGANIZATION,
                  assignee: {
                    type: AssigneeType.TEAM,
                    id: 'D140DC4C-AE55-4BE2-81F2-82EB2053B27D',
                    name: 'HR Team',
                  },
                  status: ControlItemStatus.NOT_OK,
                  refresh: {
                    type: ControlItemRefresh.MONTHLY,
                    period: 6,
                  },
                  files: [
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_DESCRIPTION.pdf',
                      description: 'Job description for the SME position',
                      url: 'https://example.com',
                    },
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_POSTING_SME_JAN.png',
                      description:
                        'A screenshot of the job posting for the SME position in January.',
                      url: 'https://example.com',
                    },
                    {
                      id: '9C0BF9EC-1ADE-436E-ABEC-512E40215757',
                      name: 'JOB_POSTING_SME_OCT.pdf',
                      description:
                        'A PDF of the job posting for the SME position in October.',
                      url: 'https://example.com',
                    },
                  ],
                  references: ['Tisax 3.51', 'ISO21434 5.2.2'],
                  nistFramework: [
                    NistFramework.PROTECT,
                    NistFramework.IDENTIFY,
                  ],
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.1.1</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
            <TableCell>Every 3 months</TableCell>
            <TableCell>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              numquam qui rerum repudiandae voluptas quam pariatur nulla facere
              voluptates eaque?
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
