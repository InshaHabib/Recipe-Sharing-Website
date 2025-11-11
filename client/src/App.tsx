import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BrowseRecipes from "@/pages/BrowseRecipes";
import RecipeDetail from "@/pages/RecipeDetail";
import SubmitRecipe from "@/pages/SubmitRecipe";
import Auth from "@/pages/Auth";
import Profile from "@/pages/Profile";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/browse" component={BrowseRecipes} />
      <Route path="/recipe/:id" component={RecipeDetail} />
      <Route path="/submit" component={SubmitRecipe} />
      <Route path="/auth" component={Auth} />
      <Route path="/profile" component={Profile} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
