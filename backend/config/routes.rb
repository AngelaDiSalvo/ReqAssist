Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :job_profiles
  resources :jobs
  resources :job_apps

  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'


end
