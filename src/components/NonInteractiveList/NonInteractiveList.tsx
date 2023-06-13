import './noninteractivelist.scss'
import { EventId } from '@wca/helpers'
import React from 'react'
import CubingIcon from '../CubingIcon'

interface ListItem {
  title: string
  cssClass?: string
  target?: string
  icon?: boolean
}

interface HeaderItem {
  title: string
  icon?: boolean
}

interface ListProps {
  rows: ListItem[][]
  header: HeaderItem[]
  footer: string[]
  loading: boolean
}

export default function NonInteractiveList({
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
            <div className="fixed-table-loading" style={{ top: '34.8px' }}>
              Loading, please wait...
            </div>
          ) : (
            <div className="fixed-table-body">
              <div aria-hidden="true" className="floatThead-container">
                <table className="table table-condensed floatThead table-hover table-striped table-greedy-last-column floatThead-table bs-table">
                  <colgroup>
                    {header.map((item) => (
                      <col key={item.title} className="floatThead-col" />
                    ))}
                  </colgroup>
                  <thead>
                    <tr>
                      {header.map((item) => (
                        <th key={item.title} className="name" data-field="name">
                          <div className="th-inner sortable both asc">
                            {item.icon ? (
                              <CubingIcon
                                event={item.title as EventId}
                                selected={true}
                              />
                            ) : (
                              item.title
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
                      <tr key={`row-${items[0].title}`}>
                        {items.map((item) => (
                          <td key={item.title} className={item.cssClass}>
                            {item.icon ? (
                              <CubingIcon
                                event={item.title as EventId}
                                selected={true}
                              />
                            ) : (
                              item.title
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
