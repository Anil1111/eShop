using System.Collections.Generic;
using System.Linq;
using eShopAPI.Data;
using eShopAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace eShopAPI.Controllers
{
    [Route("api/[controller]")]

    // domen/api/employee
    public class EmployeeController : ControllerBase
    {
        private readonly DataContext _db;
        public EmployeeController(DataContext db)
        {
            _db = db; 

        } 
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            var EmpList=_db.Employees.ToList();
            return Ok(EmpList);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Employee> Get(int id)
        {
            var employee=_db.Employees.FirstOrDefault(a=> a.id==id);
            return Ok(employee);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<Employee> Post([FromBody] Employee emp)
        {
            _db.Employees.Add(emp);
            _db.SaveChanges();
            return Ok(emp);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

    }
}