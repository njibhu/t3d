/*
 * Copyright (2012-2015) Ahom: Antoine Hom
 * https://github.com/ahom/gw2_reverse
 * 
 * (C) 2018 Njibhu
 **/

#include "gw2DatTools/exception/Exception.h"

namespace gw2dt
{
namespace exception
{

Exception::Exception(const char* iReason) :
    std::runtime_error(iReason)
{
}

Exception::~Exception() throw() 
{
}

}
}
