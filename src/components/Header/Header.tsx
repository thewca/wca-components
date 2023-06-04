import './header.scss'
import React from 'react'
import UiIcon from '../UiIcon/UiIcon'

type Item = {
  path: string
  title: string
  icon: string
}

type Divider = {
  divider: true
}

type Dropdown = {
  active?: true
  icon: string
  title: string
  items: (Item | Divider)[]
}

interface HeaderProps {
  brandImage: string
  dropdowns: Dropdown[]
}

export default function Footer({ brandImage, dropdowns }: HeaderProps) {
  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
      <div className="brand">
        <a href="/">
          <img src={brandImage} alt="brand" />
        </a>
      </div>
      <button
        type="button"
        className="navbar-toggle"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <div className="navbar-collapse collapse disabled">
        <ul className="nav navbar-nav">
          <li className="top-nav logo">
            <a href="/">
              <img src={brandImage} alt="brand" />
            </a>
          </li>
          {dropdowns.map((dropdown) => {
            return (
              <li className={`dropdown ${dropdown.active ? 'active' : ''}`}>
                <a href="#" className="dropdown-toggle top-nav">
                  <UiIcon name={dropdown.icon} />
                  <span className="hidden-sm hidden-md">{dropdown.title}</span>
                  <span className="caret"></span>
                  <ul className="dropdown-menu" role="menu">
                    {dropdown.items.map((item) => {
                      if ((item as Divider).divider) {
                        return <li className="divider"></li>
                      } else {
                        return (
                          <a href={(item as Item).path}>
                            <UiIcon name={(item as Item).icon} />{' '}
                            {(item as Item).title}
                          </a>
                        )
                      }
                    })}
                  </ul>
                </a>
              </li>
            )
          })}
          {/*          <li class="dropdown <%= (params[:controller] == 'static_pages' && params[:action] != 'homepage') ? 'active' : '' %>">*/}
          {/*            <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*              <%= ui_icon('info circle') %> <span class="hidden-sm hidden-md"><%= t '.information' %></span> <span class="caret"></span>*/}
          {/*            </a>*/}
          {/*            <ul class="dropdown-menu" role="menu">*/}
          {/*              <li><a href="<%= about_path %>"><%= ui_icon('file alternate') %> <%= t '.about' %></a></li>*/}
          {/*              <li><a href="<%= documents_path %>"><%= ui_icon('copy') %> <%= t '.documents' %></a></li>*/}
          {/*              <li><a href="<%= delegates_path %>"><%= ui_icon('sitemap') %> <%= t '.delegates' %></a></li>*/}
          {/*              <li><a href="<%= teams_committees_path %>"><%= ui_icon('id card') %> <%= t '.teams' %></a></li>*/}
          {/*              <li><a href="<%= organizations_path %>"><%= ui_icon('flag') %> <%= t '.organizations' %></a></li>*/}
          {/*              <li class="divider"></li>*/}
          {/*              <li><a href="<%= faq_path %>"><%= ui_icon('question circle') %> <%= t '.faq' %></a></li>*/}
          {/*              <li><a href="<%= education_path %>"><%= ui_icon('graduation cap') %> <%= t '.education' %></a></li>*/}
          {/*              <li><a href="<%= contact_website_path %>"><%= ui_icon('envelope') %> <%= t '.contact' %></a></li>*/}
          {/*              <li><a href="<%= speedcubing_history_path %>"><%= ui_icon('history') %> <%= t '.speedcubing_history' %></a></li>*/}
          {/*              <li><a href="<%= media_instagram_path %>"><%= ui_icon('camera') %> <%= t '.media_submission' %></a></li>*/}
          {/*              <li><a href="<%= privacy_path %>"><%= ui_icon('user secret') %> <%= t '.privacy' %></a></li>*/}
          {/*              <li><a href="<%= disclaimer_path %>"><%= ui_icon('exclamation circle') %> <%= t '.disclaimer' %></a></li>*/}
          {/*              <li class="divider"></li>*/}
          {/*              <li><a href="<%= score_tools_path %>"><%= ui_icon('wrench') %> <%= t '.tools' %></a></li>*/}
          {/*              <li><a href="<%= logo_path %>"><i><%= image_tag('wca_logo.svg', width: '16px') %></i> <%= t '.logo' %></a></li>*/}
          {/*            </ul>*/}
          {/*          </li>*/}
          {/*          <li class="dropdown <%= Set['competitions', 'delegate_reports', 'results_submission'].include?(params[:controller]) ? 'active' : '' %>">*/}
          {/*            <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*              <%= ui_icon('cube') %><span class="hidden-sm hidden-md"> <%= t '.competitions' %></span>*/}
          {/*              <span class="caret"></span>*/}
          {/*            </a>*/}
          {/*            <ul class="dropdown-menu" role="menu">*/}
          {/*              <li><a href="<%= competitions_path %>"><%= ui_icon('globe') %> <%= t '.all' %></a></li>*/}
          {/*              <li><a href="<%= my_comps_path %>"><%= ui_icon('list') %> <%= t '.my_competitions' %></a></li>*/}
          {/*              <% if current_user&.can_create_competitions? %>*/}
          {/*              <li><a href="<%= new_competition_path %>"><%= ui_icon('plus') %> <%= t '.new_competition' %></a></li>*/}
          {/*              <% end %>*/}
          {/*            </ul>*/}
          {/*          </li>*/}
          {/*          <li class="dropdown <%= Set['results', 'persons', 'media'].include?(params[:controller]) ? 'active' : '' %>">*/}
          {/*            <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*              <%= ui_icon('list ol') %>*/}
          {/*              <span class="hidden-sm hidden-md"><%= t '.results' %></span>*/}
          {/*              <span class="caret"></span>*/}
          {/*            </a>*/}
          {/*            <ul class="dropdown-menu" role="menu">*/}
          {/*              <li><a href="https://live.worldcubeassociation.org"><%= ui_icon('sort numeric down') %>WCA Live</a></li>*/}
          {/*              <li class="divider"></li>*/}
          {/*              <li><a href="<%= rankings_path("333", "single") %>"><%= ui_icon('signal', class: 'fa-rotate-90') %> <%= t '.rankings' %></a></li>*/}
          {/*          <li><a href="<%= records_path %>"><%= ui_icon('trophy') %> <%= t '.records' %></a></li>*/}
          {/*          <li><a href="<%= persons_path %>"><%= ui_icon('users') %> <%= t '.persons' %></a></li>*/}
          {/*          <% if current_user&.wca_id? %>*/}
          {/*          <li>*/}
          {/*            <%= link_to person_path(current_user.wca_id) do %>*/}
          {/*            <%= ui_icon('user') %> <%= t('.my_results') %>*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <% end %>*/}
          {/*          <li class="divider"></li>*/}
          {/*          <li><a href="https://statistics.worldcubeassociation.org/"><%= ui_icon('chart area') %> <%= t '.statistics' %></a></li>*/}
          {/*          <li><a href="<%= media_path %>"><%= ui_icon('film') %> <%= t '.multimedia' %></a></li>*/}
          {/*          <li class="divider"></li>*/}
          {/*          <li><a href="<%= db_results_export_path %>"><%= ui_icon('download') %> <%= t '.db_results_export' %></a></li>*/}
          {/*          <li><a href="<%= db_dev_export_path %>"><%= ui_icon('computer') %> <%= t '.db_dev_export' %></a></li>*/}
          {/*        </ul>*/}
          {/*      </li>*/}
          {/*      <li class="dropdown <%= Set['incidents', 'regulations', 'wdc'].include?(params[:controller]) ? 'active' : '' %>">*/}
          {/*        <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*          <%= ui_icon('book') %> <span class="hidden-sm hidden-md"><%= t '.regulations' %></span> <span class="caret"></span>*/}
          {/*        </a>*/}
          {/*        <ul class="dropdown-menu" role="menu">*/}
          {/*          <li><a href="/regulations/about"><%= ui_icon('info circle') %> <%= t '.about_regulations' %></a></li>*/}
          {/*          <li class="divider"></li>*/}
          {/*          <li><a href="/regulations/"><%= ui_icon('book') %> <%= t '.regulations' %></a></li>*/}
          {/*          <li><a href="/regulations/guidelines.html"><%= ui_icon('sticky note') %> <%= t '.guidelines' %></a></li>*/}
          {/*          <li><a href="/regulations/scrambles/"><%= ui_icon('random') %> <%= t '.scrambles' %></a></li>*/}
          {/*          <li>*/}
          {/*            <%= link_to(incidents_path) do %>*/}
          {/*            <%= ui_icon('balance scale') %> <%= t('.incidents') %>*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to(disciplinary_path) do %>*/}
          {/*            <%= ui_icon('bullhorn') %> <%= t('.disciplinary') %>*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li class="divider"></li>*/}
          {/*          <li><a href="/regulations/history/"><%= ui_icon('history') %> <%= t '.history' %></a></li>*/}
          {/*          <li><a href="/regulations/translations/"><%= ui_icon('language') %> <%= t '.translations' %></a></li>*/}
          {/*        </ul>*/}
          {/*      </li>*/}

          {/*      <li class="dropdown">*/}
          {/*        <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*          <%= ui_icon('paper plane') %> <span class="hidden-sm hidden-md"><%= t '.find_us' %></span> <span class="caret"></span>*/}
          {/*        </a>*/}
          {/*        <ul class="dropdown-menu" role="menu">*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.instagram.com/thewcaofficial/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("instagram") %> Instagram*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.facebook.com/WorldCubeAssociation/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("facebook square") %> Facebook*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.twitter.com/theWCAofficial/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("twitter") %> Twitter*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.reddit.com/r/TheWCAOfficial/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("reddit") %> Reddit*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.twitch.tv/worldcubeassociation/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("twitch") %> Twitch*/}
          {/*            <%end%>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.weibo.com/theWCA/", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("weibo") %> Weibo*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*          <li>*/}
          {/*            <%= link_to("https://www.youtube.com/channel/UC5OUMUnS8PvY1RvtB1pQZ0g", target: "_blank", class: "hide-new-window-icon") do %>*/}
          {/*            <%= ui_icon("youtube") %> YouTube*/}
          {/*            <% end %>*/}
          {/*          </li>*/}
          {/*        </ul>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <a href="https://forum.worldcubeassociation.org/" target="_blank" class="top-nav hide-new-window-icon">*/}
          {/*          <%= ui_icon('comments') %>*/}
          {/*          <span class="visible-lg-inline visible-xs-inline"><%= t '.forum' %></span>*/}
          {/*        </a>*/}
          {/*      </li>*/}
          {/*    </ul>*/}

          {/*  <ul class="nav navbar-nav navbar-right">*/}
          {/*    <li class="search-container my-2 my-lg-0">*/}
          {/*      <%= react_component("SearchWidget", {}, {*/}
          {/*      id: "omnisearch-form"*/}
          {/*    }) %>*/}
          {/*    </li>*/}
          {/*    <li class="dropdown">*/}
          {/*      <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*        <% active_locale_info = Locales::AVAILABLE[I18n.locale] %>*/}
          {/*        <%= ui_icon('language') %>*/}
          {/*        <span class="visible-lg-inline visible-xs-inline"><%= active_locale_info[:name] %></span>*/}
          {/*        <span class="caret"></span>*/}
          {/*      </a>*/}
          {/*      <ul class="dropdown-menu" id="locale-selector" role="menu">*/}
          {/*        <% Locales::AVAILABLE.each do |l, data| %>*/}
          {/*        <li class="<%= l == I18n.locale ? "active" : "" %>">*/}
          {/*          <%= link_to update_locale_path(l) do %>*/}
          {/*          <%= data[:name] %>*/}
          {/*          <% end %>*/}
          {/*        </li>*/}
          {/*        <% end %>*/}
          {/*      </ul>*/}
          {/*    </li>*/}
          {/*    <li class="dropdown">*/}
          {/*      <a href="#" class="dropdown-toggle top-nav" data-toggle="dropdown" data-hover="dropdown">*/}
          {/*        <% if current_user %>*/}
          {/*        <% notification_count = notifications_for_user(current_user).length %>*/}
          {/*        <%= render "shared/user_avatar", user: current_user, do_not_show_full_image_on_hover: true %>*/}
          {/*        <% if notification_count > 0 %>*/}
          {/*        <span class="badge"><%= notification_count %></span>*/}
          {/*        <% end %>*/}
          {/*        <% else %>*/}
          {/*        <%= t 'devise.shared.links.sign_in' %>*/}
          {/*        <% end %>*/}
          {/*        <span class="caret"></span>*/}
          {/*      </a>*/}
          {/*      <ul class="dropdown-menu" role="menu">*/}
          {/*        <% if current_user %>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= current_user.name %>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <%= link_to notifications_path do %>*/}
          {/*          <%= t '.notifications' %>*/}
          {/*          <% if notification_count > 0 %>*/}
          {/*          <span class="badge"><%= notification_count %></span>*/}
          {/*          <% end %>*/}
          {/*          <% end %>*/}
          {/*        </li>*/}
          {/*        <li><%= link_to t('.edit_profile'), profile_edit_path %></li>*/}

          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to t('.my_competitions'), my_comps_path %></li>*/}

          {/*        <% if current_user.wca_id? %>*/}
          {/*        <li><%= link_to t('.my_results'), person_path(current_user.wca_id) %></li>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.staff? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to t('.panel'), panel_path %></li>*/}
          {/*        <% end %>*/}
          {/*        <% if current_user.can_view_poll? %>*/}
          {/*        <li><%= link_to t('.polls'), polls_path %></li>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.can_view_all_users? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= t '.administration' %>*/}
          {/*        </li>*/}
          {/*        <li><%= link_to t('.manage_users'), users_path %></li>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.can_view_delegate_matters? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= t '.delegate' %>*/}
          {/*        </li>*/}
          {/*        <li><%= link_to t('.new_competition'), new_competition_path if current_user.can_create_competitions? %></li>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.can_admin_results? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= t '.results_team' %>*/}
          {/*        </li>*/}
          {/*        <li><%= link_to t('.results_admin'), admin_path %></li>*/}
          {/*        <li><%= link_to t('.competitions'), competitions_path %></li>*/}
          {/*        <li><%= link_to t('.results_phpmyadmin'), '/results/admin/phpMyAdmin/' %></li>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.can_create_posts? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to t('.new_post'), new_post_path %></li>*/}
          {/*        <% end %>*/}

          {/*        <% unless current_user.teams_where_is_leader.empty? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= t '.team_leader' %>*/}
          {/*        </li>*/}
          {/*        <% current_user.teams_where_is_leader.each do |team| %>*/}
          {/*        <li><%= link_to team.name, edit_team_path(team) %></li>*/}
          {/*        <% end %>*/}
          {/*        <% end %>*/}

          {/*        <% if current_user.can_manage_regional_organizations? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li role="presentation" class="dropdown-header">*/}
          {/*          <%= t '.regional_organizations' %>*/}
          {/*        </li>*/}
          {/*        <li><%= link_to t('.manage_regional_organizations'), admin_regional_organizations_path %></li>*/}
          {/*        <li><%= link_to t('.new_regional_organization'), new_regional_organization_path %></li>*/}
          {/*        <% end %>*/}

          {/*        <!-- Don't show the link for admins, as they have it in the dedicated admin navigation. -->*/}
          {/*        <% if current_user.can_see_eligible_voters? && !current_user.can_admin_results? %>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to "WCA Voting Members", eligible_voters_path %></li>*/}
          {/*        <li><%= link_to "WCA Leaders and Seniors", leader_senior_voters_path %></li>*/}
          {/*        <% end %>*/}

          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to t('.api'), api_path %></li>*/}
          {/*        <li><%= link_to t('.manage_app'), oauth_applications_path %></li>*/}
          {/*        <li><%= link_to t('.manage_auth_app'), oauth_authorized_applications_path %></li>*/}

          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to(t('.sign_out'), destroy_user_session_path, :method => :delete) %></li>*/}
          {/*        <% else %>*/}
          {/*        <li><%= link_to(t('devise.shared.links.sign_in'), new_user_session_path, class: "top-nav") %></li>*/}
          {/*        <li class="divider"></li>*/}
          {/*        <li><%= link_to(t('devise.shared.links.sign_up'), new_user_registration_path) %></li>*/}
          {/*        <li><%= link_to(t('devise.shared.links.didn_t_receive_confirmation_instructions'), new_user_confirmation_path) %></li>*/}
          {/*        <% end %>*/}
          {/*      </ul>*/}
          {/*    </li>*/}
        </ul>
      </div>
    </div>
  )
}
