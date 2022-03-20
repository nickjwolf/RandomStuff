using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Vidly.Models;
using Vidly.ViewModels;

namespace Vidly.Controllers
{
    public class MovieController : Controller
    {
        // GET: Movie
        public ActionResult Random()
        {
            var movie = new Movie() {Name = "Shrek!"};

            var customers = new List<Customer>
            {
                new Customer { Name = "Customer 1" },
                new Customer{ Name = "Customer 2"}
            };

            var viewModel = new RandomMovieViewModel
            {
                Movie = movie,
                Customers = customers
            };


            //ViewData["Movie"] = movie;
            //ViewBag.Movie = movie;
            return View(viewModel);
            //return Content("Hello World!");
            //return HttpNotFound();
            //return new EmptyResult();
            //return RedirectToAction("Index", "Home", new ):
        }


        public ActionResult Edit(int id)
        {
            return Content($"iD = {id}");
        }

        public ActionResult Index(int? pageIndex, string sortBy)
        {

            if (!pageIndex.HasValue)
                pageIndex = 1;

            if (String.IsNullOrWhiteSpace(sortBy))
                sortBy = "Name";

            return Content($"PageIndex = {pageIndex} SortBy = {sortBy}");
        }

       //[Route("movie/released{year}/{month:regex(\\d{4})}") ]
        [Route("movie/released/{year}/{month}")]
        public ActionResult ByReleaseDate(int year, int month)
        {
            return Content($"{year} {month}");
        }
    }
}