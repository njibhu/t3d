/*
 * Copyright (2012-2015) Ahom: Antoine Hom
 * https://github.com/ahom/gw2_reverse
 * 
 * (C) 2018 Njibhu
 **/

#ifndef GW2DATTOOLS_EXCEPTION_EXCEPTION_H
#define GW2DATTOOLS_EXCEPTION_EXCEPTION_H

#include <stdexcept>

#include "gw2DatTools/dllMacros.h"

namespace gw2dt
{
namespace exception
{

class GW2DATTOOLS_API Exception: public std::runtime_error
{
public:
    Exception(const char* iReason);
    virtual ~Exception() throw();
};

}
}

#endif // GW2DATTOOLS_EXCEPTION_EXCEPTION_H
