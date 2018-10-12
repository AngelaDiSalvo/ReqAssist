Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :applicants
  resources :jobs
  resources :employers
  resources :job_apps

end
