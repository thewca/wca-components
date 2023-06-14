import './noninteractivetable.scss'
import { EventId } from '@wca/helpers'
import React from 'react'
import CubingIcon from '../CubingIcon'
import FlagIcon from '../FlagIcon'

interface TableItem {
  text: string
  cssClass?: string
  flag?: string
  cubingIcon?: boolean
  link?: string
}

interface HeaderItem {
  text: string
  cubingIcon?: boolean
}

interface ListProps {
  rows: TableItem[][]
  header: HeaderItem[]
  footer: string[]
  loading: boolean
}

export default function NonInteractiveTable({
  rows,
  header,
  loading,
  footer,
}: ListProps) {
  return (
    <div className="table-responsive">
      <div className="bootstrap-table">
        <div className="fixed-table-container">
          {loading ? (
            <div className="fixed-table-loading">Loading, please wait...</div>
          ) : (
            <div className="fixed-table-body">
              <div aria-hidden="true" className="floatThead-container">
                <table className="table table-condensed floatThead table-hover table-striped table-greedy-last-column floatThead-table bs-table">
                  <colgroup>
                    {header.map((item) => (
                      <col key={item.text} className="floatThead-col" />
                    ))}
                  </colgroup>
                  <thead>
                    <tr>
                      {header.map((item) => (
                        <th key={item.text} className="name" data-field="name">
                          <div className="th-inner sortable both asc">
                            {item.cubingIcon ? (
                              <CubingIcon
                                event={item.text as EventId}
                                selected={true}
                              />
                            ) : (
                              item.text
                            )}
                          </div>
                          <div className="fht-cell" />
                        </th>
                      ))}
                      {/* We always add one extra th/td for the '.table-greedy-last-column' to work */}
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((items) => (
                      <tr key={`row-${items[0].text}`}>
                        {items.map((item) => (
                          <td key={item.text} className={item.cssClass}>
                            {item.flag ? <FlagIcon iso2={item.flag} /> : ''}
                            {item.cubingIcon ? (
                              <CubingIcon
                                event={item.text as EventId}
                                selected={true}
                              />
                            ) : // eslint-disable-next-line unicorn/no-nested-ternary
                            item.link ? (
                              <a href={item.link}>{item.text}</a>
                            ) : (
                              item.text
                            )}
                          </td>
                        ))}
                        <td />
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      {footer.map((item) => (
                        <td key={item}>{item}</td>
                      ))}
                      <td />
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
